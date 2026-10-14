import { spawnSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const npmCli = process.env.npm_execpath;
const { name: packageName } = JSON.parse(await readFile(join(projectRoot, 'package.json'), 'utf8'));

if (!npmCli) {
  throw new Error('Run this check with `npm run test:consumer` so npm can locate its CLI.');
}

function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, encoding: 'utf8' });

  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`Command failed with exit code ${result.status}: ${command} ${args.join(' ')}`);
  }
}

const tempRoot = await mkdtemp(join(tmpdir(), 'trix-core-consumer-'));
const consumerRoot = join(tempRoot, 'consumer');
const viteCli = join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');

try {
  run(process.execPath, [npmCli, 'pack', '--pack-destination', tempRoot], projectRoot);
  const archiveName = (await readdir(tempRoot)).find((file) => file.endsWith('.tgz'));
  if (!archiveName) throw new Error('npm pack did not create a package archive.');
  const packedArchive = join(tempRoot, archiveName);
  await access(packedArchive);

  await mkdir(join(consumerRoot, 'src'), { recursive: true });
  await writeFile(join(consumerRoot, 'package.json'), JSON.stringify({
    name: 'trix-core-consumer-smoke',
    private: true,
    type: 'module',
  }, null, 2));
  await writeFile(join(consumerRoot, 'index.html'), `<!doctype html>
<html lang="en" data-theme="ocean">
  <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Consumer smoke</title></head>
  <body>
    <main>
      <button class="dn-btn dn-btn-primary">Primary</button>
      <input class="dn-input" aria-invalid="true" value="Invalid">
      <article class="dn-card dn-card-elevated">Card</article>
      <span class="dn-badge dn-badge-danger">Danger</span>
      <div class="dn-alert dn-alert-danger" role="alert">Error</div>
      <button class="dn-dropdown__trigger" popovertarget="sample-menu">Actions</button>
      <div class="dn-dropdown__menu" id="sample-menu" popover="auto"><a class="dn-dropdown__item" href="#one">First action</a></div>
      <dialog class="dn-dialog" aria-labelledby="sample-dialog-title"><div class="dn-dialog__content"><h2 id="sample-dialog-title">Confirm</h2></div></dialog>
    </main>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`);
  await writeFile(
    join(consumerRoot, 'src', 'main.js'),
    `import ${JSON.stringify(`${packageName}/style.css`)};\n`,
  );

  run(process.execPath, [
    npmCli,
    'install',
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
    packedArchive,
  ], consumerRoot);

  try {
    await access(join(consumerRoot, 'node_modules', 'tailwindcss'));
    throw new Error('Consumer unexpectedly has Tailwind installed.');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }

  run(process.execPath, [viteCli, 'build'], consumerRoot);

  const builtCssPath = join(consumerRoot, 'dist', 'assets');
  const cssAsset = (await readdir(builtCssPath)).find((file) => file.endsWith('.css'));
  if (!cssAsset) throw new Error('Consumer build did not emit a CSS asset.');

  const css = await readFile(join(builtCssPath, cssAsset), 'utf8');
  const requiredStyles = [
    '.dn-btn-primary',
    '.dn-btn-outline',
    '.dn-btn:disabled',
    '.dn-btn:focus-visible',
    '.dn-btn[aria-busy=true]',
    '.dn-input[aria-invalid=true]',
    '.dn-input:disabled',
    '.dn-input:is(select)',
    '.dn-fieldset',
    '.dn-choice',
    '.dn-choice-card',
    '.dn-switch',
    '.dn-btn-group',
    '.dn-container',
    '.dn-grid-3',
    '.dn-cluster',
    '.dn-divider',
    '.dn-aspect',
    '.dn-page-header',
    '.dn-footer',
    '.dn-sidebar-toggle',
    '.dn-bottom-nav',
    '.dn-bottom-nav__item',
    '.dn-breadcrumbs',
    '.dn-breadcrumbs__list',
    '.dn-breadcrumbs__item',
    '.dn-pagination',
    '.dn-pagination__list',
    '.dn-pagination__link',
    '.dn-pagination__link[aria-current=page]',
    '.dn-input-group',
    '.dn-input-group__addon',
    '.dn-card-elevated',
    '.dn-card-horizontal',
    '.dn-card-gallery',
    '.dn-card-flat',
    '.dn-card-accent',
    '.dn-card-media',
    '.dn-card-stat',
    '.dn-card-profile',
    '.dn-card-quote',
    '.dn-table-toolbar',
    '.dn-table-sort',
    '.dn-table-selection',
    '.dn-table-empty',
    '.dn-badge-danger',
    '.dn-alert-danger',
    '.dn-field-error',
    '.dn-dialog',
    '.dn-dialog::backdrop',
    '.dn-dialog--fade',
    '.dn-dialog--slide-up',
    '.dn-dialog--sheet',
    '--dn-dialog-duration',
    'prefers-reduced-motion',
    '.dn-dropdown__trigger',
    '.dn-dropdown__menu',
    '.dn-dropdown__item',
    '.dn-shell',
    '.dn-theme-panel .dn-btn[aria-pressed=true]',
    '--color-primary',
    '[data-theme=ocean]',
    '.dark',
  ];

  for (const style of requiredStyles) {
    if (!css.includes(style)) throw new Error(`Consumer CSS is missing expected style: ${style}`);
  }

  if (/@(?:import|theme|custom-variant)\b/.test(css)) {
    throw new Error('Consumer CSS contains an unprocessed Tailwind directive.');
  }

  console.log('Consumer smoke test passed: packed stylesheet installed and built without Tailwind in the consumer.');
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
