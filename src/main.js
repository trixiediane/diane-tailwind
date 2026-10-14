import './styles.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="dn-shell">
    <aside class="dn-sidebar" data-mobile-expanded="false">
      <div class="dn-brand">
        <div class="dn-brand-mark">T</div>
        <div>
          <p class="dn-brand-title">Trix UI</p>
          <p class="dn-brand-subtitle">Design system</p>
        </div>
        <button class="dn-btn dn-btn-ghost dn-btn-icon dn-btn-sm dn-sidebar-toggle" id="sidebar-toggle" type="button" aria-expanded="false" aria-controls="sidebar-navigation sidebar-themes" aria-label="Expand navigation">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav class="dn-nav" id="sidebar-navigation" aria-label="Component categories">
        <span class="dn-nav-section-label">WORKSPACE</span>
        <a href="#overview" class="dn-nav-item" data-component-view="all">Overview</a>
        <span class="dn-nav-section-label">COMPONENTS</span>
        <a href="#buttons" class="dn-nav-item" data-component-view="buttons">Buttons</a>
        <a href="#inputs" class="dn-nav-item" data-component-view="inputs">Inputs</a>
        <a href="#cards" class="dn-nav-item" data-component-view="cards">Cards</a>
        <a href="#feedback" class="dn-nav-item" data-component-view="feedback">Feedback</a>
        <a href="#data-tables" class="dn-nav-item" data-component-view="data-tables">Data tables</a>
        <a href="#navigation" class="dn-nav-item" data-component-view="navigation">Navigation</a>
        <a href="#components" class="dn-nav-item" data-component-view="overlays">Overlays</a>
        <a href="#layout-examples" class="dn-nav-item" data-component-view="layouts">Layouts</a>
        <a href="#activity-updates" class="dn-nav-item" data-component-view="activity">Activity</a>
        <a href="#theme-settings" class="dn-nav-item">Themes</a>
      </nav>

      <div class="dn-theme-panel" id="sidebar-themes">
        <span id="theme-settings">Color theme</span>
        <button class="dn-btn dn-btn-ghost dn-btn-sm" data-theme-switcher="default" type="button">Default</button>
        <button class="dn-btn dn-btn-soft dn-btn-sm" data-theme-switcher="ocean" type="button">Ocean</button>
        <button class="dn-btn dn-btn-soft dn-btn-sm" data-theme-switcher="forest" type="button">Forest</button>
        <button class="dn-btn dn-btn-soft dn-btn-sm" data-theme-switcher="sunset" type="button">Sunset</button>
      </div>
    </aside>

    <main class="dn-main">
      <header class="dn-topbar" id="overview">
        <div>
          <p class="dn-eyebrow">TRIX UI · DESIGN SYSTEM</p>
          <h1 id="component-page-title">Workspace overview</h1>
        </div>
        <div class="dn-actions">
          <button class="dn-btn dn-btn-soft" type="button">Preview</button>
          <button class="dn-btn dn-btn-primary" type="button">Ship release</button>
        </div>
      </header>

      <section class="dn-grid dn-grid-4" data-component-category="all data-tables">
        <article class="dn-card dn-card-metric">
          <p class="dn-metric-label">Current release</p>
          <p class="dn-metric-value">0.1.0</p>
          <span class="dn-metric-trend">Early access</span>
        </article>
        <article class="dn-card dn-card-metric">
          <p class="dn-metric-label">Color themes</p>
          <p class="dn-metric-value">04</p>
          <span class="dn-metric-trend">Light and dark modes</span>
        </article>
        <article class="dn-card dn-card-metric">
          <p class="dn-metric-label">Interactions</p>
          <p class="dn-metric-value">Native</p>
          <span class="dn-metric-trend">Dialog and popover</span>
        </article>
        <article class="dn-card dn-card-metric">
          <p class="dn-metric-label">Runtime dependencies</p>
          <p class="dn-metric-value">00</p>
          <span class="dn-metric-trend">CSS-first components</span>
        </article>
      </section>

      <section class="dn-panels" id="components" aria-label="Native interaction examples">
        <article class="dn-card" data-component-category="overlays">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">NATIVE INTERACTION</p>
              <h2>Popover dropdown</h2>
            </div>
          </div>
          <div class="dn-dropdown">
            <button class="dn-btn dn-btn-soft dn-dropdown__trigger" id="project-menu-trigger" type="button" popovertarget="project-menu" data-dn-popover-trigger aria-controls="project-menu" aria-expanded="false">
              Project actions
            </button>
            <div class="dn-dropdown__menu" id="project-menu" popover="auto" data-dn-popover aria-labelledby="project-menu-trigger">
              <a class="dn-dropdown__item" href="#overview">View project</a>
              <a class="dn-dropdown__item" href="#theme-settings">Edit settings</a>
              <a class="dn-dropdown__item" href="#activity-updates">Manage members</a>
            </div>
          </div>
          <p class="dn-helper-text">Native toggle, Escape, and light dismissal.</p>
        </article>

        <article class="dn-card" data-component-category="overlays">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">NATIVE INTERACTION</p>
              <h2>Modal dialog</h2>
            </div>
          </div>
          <p class="dn-helper-text">Choose one of four entrance styles, then adjust how quickly every modal moves.</p>
          <div class="dn-actions dn-actions-tight dn-modal-actions">
            <button class="dn-btn dn-btn-primary" type="button" data-dn-dialog-open="release-dialog">Zoom confirmation</button>
            <button class="dn-btn dn-btn-soft" type="button" data-dn-dialog-open="quick-view-dialog">Fade only</button>
            <button class="dn-btn dn-btn-soft" type="button" data-dn-dialog-open="details-dialog">Slide-up details</button>
            <button class="dn-btn dn-btn-outline" type="button" data-dn-dialog-open="project-sheet">Open side sheet</button>
          </div>
          <label class="dn-field dn-modal-duration" for="dialog-duration">
            <span class="dn-modal-duration__label">
              <span>Animation duration</span>
              <output id="dialog-duration-value" for="dialog-duration">0.30 s</output>
            </span>
            <input class="dn-input" id="dialog-duration" type="range" min="100" max="1000" step="50" value="300">
          </label>
        </article>
      </section>

      <section class="dn-panels" id="workspace-examples">
        <article class="dn-card dn-card-feature" data-component-category="all">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">Launch checklist</p>
              <h2>Product rollout summary</h2>
            </div>
            <button class="dn-btn dn-btn-ghost dn-btn-sm" type="button">Review all</button>
          </div>

          <div class="dn-alert dn-alert-info">
            <strong>Heads up:</strong> Theme tokens and semantic styles are now synced across the default and ocean presets.
          </div>

          <div class="dn-list-stack">
            <div class="dn-list-row">
              <div>
                <span class="dn-list-title">Button primitives</span>
                <small>Primary, soft, ghost, danger</small>
              </div>
              <span class="dn-tag dn-tag-success">Ready</span>
            </div>
            <div class="dn-list-row">
              <div>
                <span class="dn-list-title">Form controls</span>
                <small>Input, select, switch, radio</small>
              </div>
              <span class="dn-tag dn-tag-info">In review</span>
            </div>
            <div class="dn-list-row">
              <div>
                <span class="dn-list-title">Sidebar navigation</span>
                <small>Dashboard shell, mobile stack</small>
              </div>
              <span class="dn-tag dn-tag-warning">Testing</span>
            </div>
          </div>
        </article>

        <article class="dn-card" data-component-category="inputs">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">Quick capture</p>
              <h2>New record</h2>
            </div>
            <span class="dn-badge">Draft</span>
          </div>
          <div class="dn-form-grid">
            <label class="dn-field">
              <span>Project name</span>
              <input class="dn-input" type="text" value="Trix UI kit" />
            </label>
            <label class="dn-field">
              <span>Owner</span>
              <select class="dn-input">
                <option>Design pod</option>
                <option>Engineering</option>
                <option>Marketing</option>
              </select>
            </label>
            <label class="dn-field dn-field-full">
              <span>Notes</span>
              <textarea class="dn-input dn-textarea" rows="4">Build reusable dashboard variants and revise card density.</textarea>
            </label>
            <label class="dn-field dn-field-full">
              <span>Project URL</span>
              <span class="dn-input-group">
                <span class="dn-input-group__addon">https://</span>
                <input class="dn-input" type="text" value="trix-ui.dev" aria-label="Project domain">
                <span class="dn-input-group__addon">/docs</span>
              </span>
            </label>
            <label class="dn-field dn-field-full">
              <span>Monthly plan price</span>
              <span class="dn-input-group">
                <span class="dn-input-group__addon">$</span>
                <input class="dn-input" type="number" value="49" min="0" aria-label="Monthly price in dollars">
                <span class="dn-input-group__addon">/ month</span>
              </span>
            </label>
            <label class="dn-field dn-field-full">
              <span>Invite teammate</span>
              <span class="dn-input-group">
                <input class="dn-input" type="email" placeholder="teammate@example.com" aria-label="Teammate email">
                <button class="dn-btn dn-btn-primary" type="button">Invite</button>
              </span>
            </label>
          </div>
          <div class="dn-actions dn-actions-tight">
            <button class="dn-btn dn-btn-soft" type="button">Save draft</button>
            <button class="dn-btn dn-btn-primary" type="button">Publish</button>
          </div>
        </article>
      </section>

      <nav class="dn-breadcrumbs" aria-label="Breadcrumb" data-component-category="navigation">
        <ol class="dn-breadcrumbs__list">
          <li class="dn-breadcrumbs__item"><a href="#overview">Workspace</a></li>
          <li class="dn-breadcrumbs__item"><a href="#layout-examples">Operations</a></li>
          <li class="dn-breadcrumbs__item"><span aria-current="page">Recent orders</span></li>
        </ol>
      </nav>

      <section class="dn-panels">
        <article class="dn-card dn-card-wide" id="data-tables" data-component-category="data-tables navigation">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">Operations</p>
              <h2>Recent orders</h2>
            </div>
            <span class="dn-badge dn-badge-success">Live</span>
          </div>

          <div class="dn-table-toolbar">
            <label class="dn-field">
              <span>Search orders</span>
              <input class="dn-input" id="orders-search" type="search" placeholder="Customer or product">
            </label>
            <label class="dn-field">
              <span>Status</span>
              <select class="dn-input" id="orders-status">
                <option value="all">All statuses</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Refunded">Refunded</option>
              </select>
            </label>
            <label class="dn-field">
              <span>Rows per page</span>
              <select class="dn-input" id="orders-page-size">
                <option value="4" selected>4</option>
                <option value="6">6</option>
                <option value="9">9</option>
              </select>
            </label>
          </div>
          <p class="dn-table-selection" id="orders-selection" aria-live="polite">No orders selected</p>
          <div class="dn-table-scroll">
          <table class="dn-table" id="orders-table" aria-describedby="orders-summary">
            <caption class="dn-sr-only">Recent customer orders</caption>
            <thead>
              <tr>
                <th scope="col" class="dn-table-select">
                  <input type="checkbox" id="orders-select-page" aria-label="Select all orders on this page">
                </th>
                <th scope="col" aria-sort="ascending"><button class="dn-table-sort" type="button" data-sort="customer">Customer <span aria-hidden="true">↑</span></button></th>
                <th scope="col" aria-sort="none"><button class="dn-table-sort" type="button" data-sort="product">Product <span aria-hidden="true">↕</span></button></th>
                <th scope="col" aria-sort="none"><button class="dn-table-sort" type="button" data-sort="status">Status <span aria-hidden="true">↕</span></button></th>
                <th scope="col" aria-sort="none"><button class="dn-table-sort" type="button" data-sort="value">Value <span aria-hidden="true">↕</span></button></th>
              </tr>
            </thead>
            <tbody id="orders-table-body"></tbody>
          </table>
          </div>
          <nav class="dn-pagination" id="orders-pagination" aria-label="Orders pages">
            <span class="dn-help-text" id="orders-summary" aria-live="polite"></span>
            <ul class="dn-pagination__list"></ul>
          </nav>
        </article>

        <article class="dn-card" data-component-category="activity">
          <div class="dn-card-head" id="activity-updates">
            <div>
              <p class="dn-kicker">Activity</p>
              <h2>Recent updates</h2>
            </div>
            <span class="dn-badge">Today</span>
          </div>

          <div class="dn-feed">
            <div class="dn-feed-item">
              <span class="dn-feed-dot"></span>
              <div>
                <strong>Theme tokens synced</strong>
                <small>New default + ocean preset</small>
              </div>
            </div>
            <div class="dn-feed-item">
              <span class="dn-feed-dot"></span>
              <div>
                <strong>Button states reviewed</strong>
                <small>Hover, focus, disabled, danger</small>
              </div>
            </div>
            <div class="dn-feed-item">
              <span class="dn-feed-dot"></span>
              <div>
                <strong>Mock dashboard shipped</strong>
                <small>Layouts and cards ready for QA</small>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section class="dn-panels" id="component-examples">
        <article class="dn-card" id="navigation" data-component-category="navigation">
          <div class="dn-navbar">
            <div class="dn-navbar-brand">
              <div class="dn-navbar-mark">T</div>
              <span>Trix</span>
            </div>
            <nav class="dn-navbar-nav" aria-label="Navbar">
              <a href="#">Overview</a>
              <a href="#">Workflows</a>
              <a href="#">Billing</a>
              <a href="#">Settings</a>
            </nav>
            <div class="dn-btn-group" role="group" aria-label="Project actions">
              <button class="dn-btn dn-btn-soft dn-btn-sm" type="button">Share</button>
              <button class="dn-btn dn-btn-primary dn-btn-sm" type="button">New project</button>
            </div>
          </div>

          <div class="dn-check-list">
            <label class="dn-toggle">
              <input type="checkbox" checked />
              <span>Auto sync design tokens</span>
            </label>
            <label class="dn-toggle">
              <input type="checkbox" />
              <span>Require approval before publish</span>
            </label>
            <label class="dn-toggle">
              <input type="checkbox" checked />
              <span>Enable dark mode preview</span>
            </label>
          </div>
        </article>

      </section>

      <section class="dn-card" id="layout-examples" aria-label="Layout primitives" data-component-category="layouts">
        <div class="dn-container dn-layout-demo">
          <header class="dn-page-header">
            <div>
              <p class="dn-kicker">Layout primitives</p>
              <h2 class="dn-page-header__title">Simple building blocks</h2>
              <p class="dn-page-header__description">Responsive grid, stack, divider, aspect ratio, and page furniture.</p>
            </div>
            <div class="dn-btn-group" role="group" aria-label="View options">
              <button class="dn-btn dn-btn-soft dn-btn-sm" type="button" aria-pressed="true">Grid</button>
              <button class="dn-btn dn-btn-ghost dn-btn-sm" type="button" aria-pressed="false">List</button>
            </div>
          </header>
          <hr class="dn-divider">
          <div class="dn-grid dn-grid-3">
            <article class="dn-card">
              <p class="dn-kicker">Grid</p>
              <strong>Three responsive columns</strong>
              <p class="dn-help-text">Use dn-grid with dn-grid-2 or dn-grid-3.</p>
            </article>
            <article class="dn-card">
              <p class="dn-kicker">Stack</p>
              <div class="dn-stack">
                <span>Consistent vertical rhythm</span>
                <span class="dn-help-text">Adjust with --dn-stack-gap.</span>
              </div>
            </article>
            <article class="dn-card">
              <p class="dn-kicker">Aspect ratio</p>
              <div class="dn-aspect dn-aspect-placeholder" style="--dn-aspect-ratio: 16 / 9">
                <span>16:9 media slot</span>
              </div>
            </article>
          </div>
          <footer class="dn-footer">
            <p>Reusable structure, no JavaScript required.</p>
            <a class="dn-link" href="#components">Explore components</a>
          </footer>
        </div>
      </section>

      <section class="dn-panels" aria-label="Core component examples">
        <article class="dn-card" id="buttons" data-component-category="buttons">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">Core components</p>
              <h2>Button variants and states</h2>
            </div>
          </div>
          <div class="dn-stack">
            <div class="dn-button-row">
              <button class="dn-btn dn-btn-primary" type="button">Primary</button>
              <button class="dn-btn dn-btn-outline" type="button">Outline</button>
              <button class="dn-btn dn-btn-ghost" type="button">Ghost</button>
              <button class="dn-btn dn-btn-danger" type="button">Danger</button>
            </div>
            <div class="dn-button-row">
              <button class="dn-btn dn-btn-primary dn-btn-sm" type="button">Small</button>
              <button class="dn-btn dn-btn-soft dn-btn-lg" type="button">Large</button>
              <button class="dn-btn dn-btn-primary" type="button" disabled>Disabled</button>
              <button class="dn-btn dn-btn-primary" type="button" aria-busy="true" disabled>Saving</button>
            </div>
          </div>
        </article>

        <article class="dn-card" id="inputs" data-component-category="inputs">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">Core components</p>
              <h2>Input states</h2>
            </div>
          </div>
          <div class="dn-form-grid">
            <label class="dn-field">
              <span>Email address</span>
              <input class="dn-input" type="email" placeholder="you@example.com" />
            </label>
            <label class="dn-field">
              <span>Unavailable field</span>
              <input class="dn-input" type="text" value="Read only" disabled />
            </label>
            <label class="dn-field dn-field-full">
              <span>Invalid field</span>
              <input class="dn-input" type="email" value="not-an-email" aria-invalid="true" aria-describedby="email-error" />
              <small class="dn-field-error" id="email-error">Enter a valid email address.</small>
            </label>
          </div>
          <fieldset class="dn-fieldset dn-choice-demo">
            <legend class="dn-fieldset-legend">Delivery preferences</legend>
            <div class="dn-choice-list">
              <label class="dn-choice-card">
                <input type="radio" name="delivery-frequency" value="weekly" checked>
                <span><strong>Weekly summary</strong><br><span class="dn-help-text">A short update every Monday.</span></span>
              </label>
              <label class="dn-choice-card">
                <input type="radio" name="delivery-frequency" value="monthly">
                <span><strong>Monthly digest</strong><br><span class="dn-help-text">One recap at the end of each month.</span></span>
              </label>
              <label class="dn-switch">
                <input type="checkbox" role="switch" checked>
                <span>Enable product update emails</span>
              </label>
              <label class="dn-choice">
                <input type="checkbox">
                <span>Include release announcements</span>
              </label>
            </div>
          </fieldset>
        </article>
      </section>

      <section class="dn-panels" aria-label="Status examples">
        <article class="dn-card" id="feedback" data-component-category="feedback">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">Core components</p>
              <h2>Badges and alerts</h2>
            </div>
          </div>
          <div class="dn-button-row">
            <span class="dn-badge">Neutral</span>
            <span class="dn-badge dn-badge-success">Success</span>
            <span class="dn-badge dn-badge-warning">Warning</span>
            <span class="dn-badge dn-badge-danger">Danger</span>
            <span class="dn-badge dn-badge-info">Info</span>
          </div>
          <div class="dn-stack">
            <div class="dn-alert dn-alert-success" role="status">Your changes have been saved.</div>
            <div class="dn-alert dn-alert-warning" role="status">Review these settings before continuing.</div>
            <div class="dn-alert dn-alert-danger" role="alert">The update could not be completed.</div>
          </div>
        </article>

      </section>

      <section class="dn-card-showcase" id="cards" data-component-category="cards" aria-labelledby="cards-title">
        <div class="dn-card-showcase__heading">
          <div>
            <p class="dn-kicker">Flexible content surfaces</p>
            <h2 id="cards-title">Cards for every kind of content</h2>
          </div>
          <p>Mix surface treatments, media, and layouts to fit the information—not the other way around.</p>
        </div>
        <div class="dn-card-gallery">
          <article class="dn-card dn-card-flat">
            <span class="dn-badge">Simple</span>
            <h3>Quiet by design</h3>
            <p>A clean, low-emphasis surface for secondary content and settings.</p>
            <a class="dn-card-text-link" href="#cards">Explore components <span aria-hidden="true">→</span></a>
          </article>

          <article class="dn-card dn-card-accent">
            <span class="dn-badge dn-badge-info">Featured</span>
            <h3>A little emphasis</h3>
            <p>A slim color edge draws attention without adding visual noise.</p>
            <div class="dn-card-meta"><span class="dn-status-dot" aria-hidden="true"></span> Ready to use</div>
          </article>

          <article class="dn-card dn-card-media">
            <div class="dn-card__media" aria-hidden="true"><span>Creative workspace</span></div>
            <div class="dn-card__body">
              <div class="dn-card__eyebrow"><span class="dn-badge dn-badge-success">Published</span><span>6 min read</span></div>
              <h3>Designing for clarity</h3>
              <p>Pair a visual cover with a title, short description, and useful metadata.</p>
              <a class="dn-card-text-link" href="#cards">Read article <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <article class="dn-card dn-card-metric dn-card-stat">
            <div class="dn-card-stat__top"><span class="dn-metric-label">Monthly revenue</span><span class="dn-badge dn-badge-success">+12.8%</span></div>
            <strong class="dn-metric-value">$24,680</strong>
            <span class="dn-card-stat__caption">Compared with last month</span>
            <div class="dn-card-stat__bar" aria-label="Revenue progress: 72%">
              <span></span>
            </div>
          </article>

          <article class="dn-card dn-card-horizontal dn-card-profile">
            <div class="dn-card-profile__avatar" aria-hidden="true">AM</div>
            <div class="dn-card-profile__content">
              <div class="dn-card-profile__top"><strong>Alex Morgan</strong><span class="dn-badge">Admin</span></div>
              <p>Product designer focused on thoughtful, accessible experiences.</p>
              <a class="dn-card-text-link" href="#cards">View profile <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <article class="dn-card dn-card-elevated dn-card-quote">
            <span class="dn-card-quote__mark" aria-hidden="true">“</span>
            <blockquote>A thoughtful interface makes every step feel simple.</blockquote>
            <div class="dn-card-quote__author"><span class="dn-card-profile__avatar" aria-hidden="true">AM</span><div><strong>Alex Morgan</strong><span>Product designer</span></div></div>
          </article>
        </div>
      </section>

      <dialog class="dn-dialog" id="release-dialog" aria-labelledby="release-dialog-title" aria-describedby="release-dialog-description">
        <div class="dn-dialog__content">
          <p class="dn-kicker">Confirm action</p>
          <h2 id="release-dialog-title">Publish this release?</h2>
          <p class="dn-dialog__description" id="release-dialog-description">This will share the new component set with all active workspaces.</p>
          <div class="dn-actions dn-actions-tight">
            <button class="dn-btn dn-btn-ghost" type="button" data-dn-dialog-close>Cancel</button>
            <form method="dialog">
              <button class="dn-btn dn-btn-primary" type="submit">Confirm publish</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog class="dn-dialog dn-dialog--fade" id="quick-view-dialog" aria-labelledby="quick-view-dialog-title" aria-describedby="quick-view-dialog-description">
        <div class="dn-dialog__content">
          <p class="dn-kicker">Quick preview</p>
          <h2 id="quick-view-dialog-title">A softer entrance</h2>
          <p class="dn-dialog__description" id="quick-view-dialog-description">This version uses a simple fade without scaling or sliding the dialog.</p>
          <div class="dn-actions dn-actions-tight">
            <button class="dn-btn dn-btn-primary" type="button" data-dn-dialog-close>Close preview</button>
          </div>
        </div>
      </dialog>

      <dialog class="dn-dialog dn-dialog--slide-up" id="details-dialog" aria-labelledby="details-dialog-title" aria-describedby="details-dialog-description">
        <div class="dn-dialog__content">
          <p class="dn-kicker">Release notes</p>
          <h2 id="details-dialog-title">A smoother way to ship</h2>
          <p class="dn-dialog__description" id="details-dialog-description">This slide-up modal is ideal for lightweight details that should keep the current page in view.</p>
          <div class="dn-alert dn-alert-info" role="status">Your workspace and unsaved changes stay right where they are.</div>
          <div class="dn-actions dn-actions-tight">
            <button class="dn-btn dn-btn-primary" type="button" data-dn-dialog-close>Got it</button>
          </div>
        </div>
      </dialog>

      <dialog class="dn-dialog dn-dialog--sheet" id="project-sheet" aria-labelledby="project-sheet-title" aria-describedby="project-sheet-description" data-dn-backdrop-close>
        <div class="dn-dialog__content dn-sheet-content">
          <div class="dn-card-head">
            <div>
              <p class="dn-kicker">Project overview</p>
              <h2 id="project-sheet-title">Trix UI kit</h2>
            </div>
            <button class="dn-btn dn-btn-ghost dn-btn-sm" type="button" data-dn-dialog-close aria-label="Close project details">Close</button>
          </div>
          <p class="dn-dialog__description" id="project-sheet-description">A side sheet keeps the underlying workspace in context while showing supporting details.</p>
          <div class="dn-list-stack">
            <div class="dn-list-row">
              <div><span class="dn-list-title">Design system</span><small>Project type</small></div>
              <span class="dn-tag dn-tag-success">Active</span>
            </div>
            <div class="dn-list-row">
              <div><span class="dn-list-title">Design pod</span><small>Owner</small></div>
              <span class="dn-badge">Team</span>
            </div>
          </div>
          <div class="dn-actions dn-actions-tight">
            <button class="dn-btn dn-btn-primary" type="button" data-dn-dialog-close>Done</button>
          </div>
        </div>
      </dialog>
      </main>
      <nav class="dn-bottom-nav" aria-label="Mobile navigation">
        <a class="dn-bottom-nav__item" href="#overview" data-component-views="all" aria-current="page" aria-label="Overview">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></svg>
          <span>Overview</span>
        </a>
        <a class="dn-bottom-nav__item" href="#buttons" data-component-views="buttons inputs cards feedback data-tables navigation overlays" aria-label="Components">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
          <span>Components</span>
        </a>
        <a class="dn-bottom-nav__item" href="#layout-examples" data-component-views="layouts" aria-label="Layouts">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M9 9h12" /></svg>
          <span>Layouts</span>
        </a>
        <a class="dn-bottom-nav__item" href="#activity-updates" data-component-views="activity" aria-label="Activity">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 19V5m0 14h16M7 15l4-4 3 2 5-6" /></svg>
          <span>Activity</span>
        </a>
      </nav>
    </div>
  `;

  const sidebar = document.querySelector('.dn-sidebar');
  const sidebarToggle = document.querySelector('#sidebar-toggle');

  if (!(sidebar instanceof HTMLElement) || !(sidebarToggle instanceof HTMLButtonElement)) {
    throw new Error('Sidebar navigation controls were not found.');
  }

  const setSidebarExpanded = (expanded) => {
    sidebar.dataset.mobileExpanded = String(expanded);
    sidebarToggle.setAttribute('aria-expanded', String(expanded));
    sidebarToggle.setAttribute('aria-label', expanded ? 'Collapse navigation' : 'Expand navigation');
  };

  sidebarToggle.addEventListener('click', () => {
    setSidebarExpanded(sidebar.dataset.mobileExpanded !== 'true');
  });

  const componentViewLinks = document.querySelectorAll('#sidebar-navigation [data-component-view]');
  const componentPageTitle = document.querySelector('#component-page-title');
  const componentViewTitles = {
    all: 'Workspace overview',
    buttons: 'Buttons',
    inputs: 'Inputs',
    cards: 'Cards',
    feedback: 'Feedback',
    'data-tables': 'Data tables',
    navigation: 'Navigation',
    overlays: 'Overlays',
    layouts: 'Layouts',
    activity: 'Activity',
  };

  if (!(componentPageTitle instanceof HTMLHeadingElement)) {
    throw new Error('Component page heading was not found.');
  }

  const bottomNavigationLinks = document.querySelectorAll('.dn-bottom-nav__item');
  const setComponentView = (view) => {
    const selectedView = componentViewTitles[view] ? view : 'all';
    const showEverything = selectedView === 'all';

    document.querySelectorAll('main [data-component-category]').forEach((element) => {
      const categories = element.dataset.componentCategory.split(/\s+/);
      element.hidden = !showEverything && !categories.includes(selectedView);
    });

    document.querySelectorAll('main section:not([data-component-category])').forEach((section) => {
      const categorizedContent = section.querySelectorAll('[data-component-category]');
      section.hidden = categorizedContent.length > 0
        && !Array.from(categorizedContent).some((element) => !element.hidden);
    });

    componentPageTitle.textContent = componentViewTitles[selectedView];
    componentViewLinks.forEach((link) => {
      const isCurrent = link.dataset.componentView === selectedView;
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
      link.classList.toggle('active', isCurrent);
    });

    bottomNavigationLinks.forEach((link) => {
      const views = link.dataset.componentViews.split(/\s+/);
      if (views.includes(selectedView)) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  const applyComponentViewFromHash = () => {
    const link = Array.from(componentViewLinks).find((item) => item.hash === window.location.hash);
    setComponentView(link?.dataset.componentView || 'all');
  };

  applyComponentViewFromHash();
  window.addEventListener('hashchange', applyComponentViewFromHash);

  sidebar.querySelectorAll('.dn-nav-item').forEach((link) => {
    link.addEventListener('click', () => {
      setSidebarExpanded(false);
    });
  });

  bottomNavigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setSidebarExpanded(false);
    });
  });

  const orders = [
    { id: 'order-1001', customer: 'Nova Labs', product: 'Enterprise plan', status: 'Paid', value: 3600 },
    { id: 'order-1002', customer: 'Bluebird Studio', product: 'Starter bundle', status: 'Pending', value: 760 },
    { id: 'order-1003', customer: 'Northwind', product: 'Platform access', status: 'Processing', value: 24000 },
    { id: 'order-1004', customer: 'Harbor Labs', product: 'Design retainer', status: 'Paid', value: 5200 },
    { id: 'order-1005', customer: 'Acme Works', product: 'Team plan', status: 'Processing', value: 1800 },
    { id: 'order-1006', customer: 'Cedar & Co.', product: 'Starter bundle', status: 'Refunded', value: 420 },
    { id: 'order-1007', customer: 'Orbit Systems', product: 'Enterprise plan', status: 'Paid', value: 12800 },
    { id: 'order-1008', customer: 'Juniper House', product: 'Design retainer', status: 'Pending', value: 2400 },
    { id: 'order-1009', customer: 'Summit Digital', product: 'Platform access', status: 'Paid', value: 9600 },
  ];

  const orderTable = document.querySelector('#orders-table');
  const orderTableBody = document.querySelector('#orders-table-body');
  const orderSearch = document.querySelector('#orders-search');
  const orderStatus = document.querySelector('#orders-status');
  const orderPageSize = document.querySelector('#orders-page-size');
  const orderPagination = document.querySelector('#orders-pagination');
  const orderPaginationList = orderPagination?.querySelector('.dn-pagination__list');
  const orderSummary = document.querySelector('#orders-summary');
  const orderSelection = document.querySelector('#orders-selection');
  const selectPageCheckbox = document.querySelector('#orders-select-page');

  if (
    !(orderTable instanceof HTMLTableElement) ||
    !(orderTableBody instanceof HTMLTableSectionElement) ||
    !(orderSearch instanceof HTMLInputElement) ||
    !(orderStatus instanceof HTMLSelectElement) ||
    !(orderPageSize instanceof HTMLSelectElement) ||
    !(orderPagination instanceof HTMLElement) ||
    !(orderPaginationList instanceof HTMLUListElement) ||
    !(orderSummary instanceof HTMLElement) ||
    !(orderSelection instanceof HTMLElement) ||
    !(selectPageCheckbox instanceof HTMLInputElement)
  ) {
    throw new Error('Orders table controls were not found.');
  }

  const orderState = {
    page: 1,
    pageSize: Number(orderPageSize.value),
    sortKey: 'customer',
    sortDirection: 'asc',
    selected: new Set(),
  };

  const orderStatusClasses = {
    Paid: 'dn-tag-success',
    Pending: 'dn-tag-warning',
    Processing: 'dn-tag-info',
    Refunded: 'dn-tag-danger',
  };

  const orderCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const getFilteredOrders = () => {
    const query = orderSearch.value.trim().toLocaleLowerCase();
    return orders.filter((order) => {
      const matchesQuery = `${order.customer} ${order.product} ${order.status} ${order.value} ${orderCurrency.format(order.value)}`
        .toLocaleLowerCase()
        .includes(query);
      const matchesStatus = orderStatus.value === 'all' || order.status === orderStatus.value;
      return matchesQuery && matchesStatus;
    });
  };

  const getOrderedOrders = () => getFilteredOrders().sort((first, second) => {
    const firstValue = first[orderState.sortKey];
    const secondValue = second[orderState.sortKey];
    const comparison = typeof firstValue === 'number'
      ? firstValue - secondValue
      : String(firstValue).localeCompare(String(secondValue), undefined, { sensitivity: 'base', numeric: true });
    return orderState.sortDirection === 'asc' ? comparison : -comparison;
  });

  const renderOrders = () => {
    const filteredOrders = getOrderedOrders();

    const pageCount = Math.ceil(filteredOrders.length / orderState.pageSize);
    orderState.page = Math.min(orderState.page, Math.max(pageCount, 1));
    const pageStart = (orderState.page - 1) * orderState.pageSize;
    const visibleOrders = filteredOrders.slice(pageStart, pageStart + orderState.pageSize);

    orderTableBody.replaceChildren();

    if (visibleOrders.length === 0) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.className = 'dn-table-empty';
      cell.colSpan = 5;
      cell.textContent = 'No orders match your search or filters.';
      row.append(cell);
      orderTableBody.append(row);
    }

    visibleOrders.forEach((order) => {
      const row = document.createElement('tr');
      const selectCell = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = orderState.selected.has(order.id);
      checkbox.dataset.orderId = order.id;
      checkbox.setAttribute('aria-label', `Select ${order.customer} order`);
      selectCell.append(checkbox);

      const customerCell = document.createElement('th');
      customerCell.scope = 'row';
      customerCell.textContent = order.customer;

      const productCell = document.createElement('td');
      productCell.textContent = order.product;

      const statusCell = document.createElement('td');
      const statusTag = document.createElement('span');
      statusTag.className = `dn-tag ${orderStatusClasses[order.status]}`;
      statusTag.textContent = order.status;
      statusCell.append(statusTag);

      const valueCell = document.createElement('td');
      valueCell.textContent = orderCurrency.format(order.value);

      row.append(selectCell, customerCell, productCell, statusCell, valueCell);
      orderTableBody.append(row);
    });

    const selectedOnPage = visibleOrders.filter((order) => orderState.selected.has(order.id)).length;
    selectPageCheckbox.checked = visibleOrders.length > 0 && selectedOnPage === visibleOrders.length;
    selectPageCheckbox.indeterminate = selectedOnPage > 0 && selectedOnPage < visibleOrders.length;
    selectPageCheckbox.disabled = visibleOrders.length === 0;
    orderSelection.textContent = orderState.selected.size === 0
      ? 'No orders selected'
      : `${orderState.selected.size} order${orderState.selected.size === 1 ? '' : 's'} selected`;

    const firstResult = filteredOrders.length === 0 ? 0 : pageStart + 1;
    const lastResult = Math.min(pageStart + visibleOrders.length, filteredOrders.length);
    orderSummary.textContent = `Showing ${firstResult}–${lastResult} of ${filteredOrders.length} orders`;

    orderPaginationList.replaceChildren();
    const addPageButton = (label, page, accessibleLabel, disabled = false, current = false) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'dn-pagination__link';
      button.dataset.page = String(page);
      button.textContent = label;
      button.setAttribute('aria-label', accessibleLabel);
      button.disabled = disabled;
      if (current) button.setAttribute('aria-current', 'page');
      item.append(button);
      orderPaginationList.append(item);
    };

    addPageButton('‹', Math.max(orderState.page - 1, 1), 'Previous page', orderState.page <= 1);
    for (let page = 1; page <= pageCount; page += 1) {
      addPageButton(String(page), page, `Page ${page}`, false, page === orderState.page);
    }
    addPageButton('›', Math.min(orderState.page + 1, Math.max(pageCount, 1)), 'Next page', orderState.page >= pageCount);

    orderTable.querySelectorAll('thead th:has(button[data-sort])').forEach((header) => {
      const button = header.querySelector('button[data-sort]');
      const isCurrentSort = button.dataset.sort === orderState.sortKey;
      header.setAttribute(
        'aria-sort',
        isCurrentSort ? (orderState.sortDirection === 'asc' ? 'ascending' : 'descending') : 'none',
      );
      const direction = isCurrentSort ? orderState.sortDirection : null;
      button.querySelector('span').textContent = direction === 'asc' ? '↑' : direction === 'desc' ? '↓' : '↕';
      button.setAttribute(
        'aria-label',
        `Sort by ${button.dataset.sort}, ${direction === 'asc' ? 'ascending' : direction === 'desc' ? 'descending' : 'not sorted'}`,
      );
    });
  };

  renderOrders();

  orderSearch.addEventListener('input', () => {
    orderState.page = 1;
    renderOrders();
  });

  orderStatus.addEventListener('change', () => {
    orderState.page = 1;
    renderOrders();
  });

  orderPageSize.addEventListener('change', () => {
    orderState.pageSize = Number(orderPageSize.value);
    orderState.page = 1;
    renderOrders();
  });

  orderTable.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const sortButton = event.target.closest('[data-sort]');
    if (!(sortButton instanceof HTMLButtonElement)) return;

    const key = sortButton.dataset.sort;
    if (!['customer', 'product', 'status', 'value'].includes(key)) {
      throw new Error(`Unsupported order sort key: ${key}`);
    }

    orderState.sortDirection = orderState.sortKey === key && orderState.sortDirection === 'asc'
      ? 'desc'
      : 'asc';
    orderState.sortKey = key;
    orderState.page = 1;
    renderOrders();
    orderTable.querySelector(`[data-sort="${key}"]`).focus();
  });

  orderTable.addEventListener('change', (event) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    if (event.target === selectPageCheckbox) {
      const pageOrders = getOrderedOrders()
        .slice((orderState.page - 1) * orderState.pageSize, orderState.page * orderState.pageSize);

      pageOrders.forEach((order) => {
        if (selectPageCheckbox.checked) orderState.selected.add(order.id);
        else orderState.selected.delete(order.id);
      });
      renderOrders();
      selectPageCheckbox.focus();
      return;
    }

    const orderId = event.target.dataset.orderId;
    if (!orderId) return;
    if (event.target.checked) orderState.selected.add(orderId);
    else orderState.selected.delete(orderId);
    renderOrders();
    orderTable.querySelector(`[data-order-id="${orderId}"]`)?.focus();
  });

  orderPagination.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const pageButton = event.target.closest('button[data-page]');
    if (!(pageButton instanceof HTMLButtonElement) || pageButton.disabled) return;

    orderState.page = Number(pageButton.dataset.page);
    renderOrders();
    orderPagination.querySelector(`button[data-page="${orderState.page}"]`)?.focus();
  });

  const dialogDurationInput = document.querySelector('#dialog-duration');
const dialogDurationOutput = document.querySelector('#dialog-duration-value');

if (!(dialogDurationInput instanceof HTMLInputElement) || !(dialogDurationOutput instanceof HTMLOutputElement)) {
  throw new Error('Dialog animation duration controls were not found.');
}

dialogDurationInput.addEventListener('input', () => {
  const durationMs = Number(dialogDurationInput.value);
  dialogDurationOutput.value = `${(durationMs / 1000).toFixed(2)} s`;
  document.documentElement.style.setProperty('--dn-dialog-duration', `${durationMs}ms`);
});

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return;

  const openButton = event.target.closest('[data-dn-dialog-open]');
  if (openButton instanceof HTMLButtonElement) {
    const dialog = document.getElementById(openButton.dataset.dnDialogOpen);
    if (!(dialog instanceof HTMLDialogElement)) {
      throw new Error(`Dialog not found: ${openButton.dataset.dnDialogOpen}`);
    }
    dialog.showModal();
  }

  const closeButton = event.target.closest('[data-dn-dialog-close]');
  if (closeButton) {
    const dialog = closeButton.closest('dialog');
    if (!(dialog instanceof HTMLDialogElement)) {
      throw new Error('Dialog close control must be inside a dialog.');
    }
    dialog.close();
  }

  if (
    event.target instanceof HTMLDialogElement &&
    event.target.hasAttribute('data-dn-backdrop-close')
  ) {
    event.target.close('backdrop');
  }
});

document.addEventListener('toggle', (event) => {
  if (!(event.target instanceof HTMLElement) || !event.target.hasAttribute('popover')) return;

  document.querySelectorAll('[data-dn-popover-trigger]').forEach((trigger) => {
    if (trigger.getAttribute('popovertarget') === event.target.id) {
      trigger.setAttribute('aria-expanded', event.newState === 'open' ? 'true' : 'false');
    }
  });
}, true);

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;

  const dialog = document.querySelector('dialog[open]');
  if (dialog instanceof HTMLDialogElement) {
    const cancelEvent = new Event('cancel', { cancelable: true });
    if (dialog.dispatchEvent(cancelEvent)) {
      dialog.close();
      event.preventDefault();
    }
    return;
  }

  const popover = document.querySelector('[popover]:popover-open');
  if (popover instanceof HTMLElement && popover.getAttribute('popover') !== 'manual') {
    popover.hidePopover();
    event.preventDefault();
  }
});

const supportsAnchoredPopover = CSS.supports('position-area: bottom span-right');

if (!supportsAnchoredPopover) {
  const positionOpenPopovers = () => {
    document.querySelectorAll('[data-dn-popover-trigger]').forEach((trigger) => {
      const popoverId = trigger.getAttribute('popovertarget');
      const popover = popoverId ? document.getElementById(popoverId) : null;
      if (!(popover instanceof HTMLElement) || !popover.matches(':popover-open')) return;

      const triggerRect = trigger.getBoundingClientRect();
      const popoverRect = popover.getBoundingClientRect();
      const horizontalMargin = 8;
      const left = Math.min(
        Math.max(horizontalMargin, triggerRect.right - popoverRect.width),
        window.innerWidth - popoverRect.width - horizontalMargin,
      );
      const top = triggerRect.bottom + popoverRect.height + horizontalMargin <= window.innerHeight
        ? triggerRect.bottom + horizontalMargin
        : Math.max(horizontalMargin, triggerRect.top - popoverRect.height - horizontalMargin);

      popover.style.setProperty('--dn-popover-top', `${top}px`);
      popover.style.setProperty('--dn-popover-left', `${left}px`);
    });
  };

  document.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('[data-dn-popover-trigger]')) {
      requestAnimationFrame(positionOpenPopovers);
    }
  });
  document.addEventListener('scroll', positionOpenPopovers, true);
  window.addEventListener('resize', positionOpenPopovers);
}

const themeButtons = document.querySelectorAll('[data-theme-switcher]');
const selectedTheme = document.documentElement.dataset.theme || 'default';

themeButtons.forEach((button) => {
  button.setAttribute('aria-pressed', String(button.dataset.themeSwitcher === selectedTheme));
  button.addEventListener('click', () => {
    const next = button.dataset.themeSwitcher;
    const root = document.documentElement;
    root.dataset.theme = next;
    localStorage.setItem('trix-ui-theme', next);
    themeButtons.forEach((themeButton) => {
      themeButton.setAttribute('aria-pressed', String(themeButton === button));
    });
  });
});
