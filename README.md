# Trix UI

A Tailwind v4-first design system and UI kit prototype for building polished, accessible interfaces.

## Overview

Trix UI is a CSS-first component library that follows the principles in the plan document: semantic class names, framework-agnostic HTML/CSS, minimal optional JavaScript, and strong theming support.

This repository contains a working demo and the first standalone stylesheet package build. The package is not published to npm yet.

## Goals

- Tailwind v4 only
- Semantic classes such as `dn-btn`, `dn-card`, `dn-input`
- Framework-agnostic components that work in plain HTML or any UI stack
- Accessible defaults with good focus states and contrast
- Theme support with light/dark mode and reusable semantic tokens
- Small optional JS layer only for behaviors CSS cannot handle cleanly

## Tech stack

- Vite
- Tailwind CSS v4
- Vanilla JavaScript for the demo shell
- CSS variables and `@theme` tokens for styling foundations

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## How to use this prototype

The demo UI is composed in `src/main.js`. Core tokens and component styles live in `src/trix-ui.css`. `src/styles.css` assembles the published stylesheet, adds the polished default theme and app-shell styles, and is shared by the demo and package build.

### Use the built stylesheet in another project

Build Trix UI first:

```bash
npm install
npm run build
```

From a sibling project, install this repository as a local package (replace the path with the location of this checkout):

```bash
npm install file:../diane-tailwind
```

Once published, install it by package name:

```bash
npm install trix-core
```

Import the stylesheet from your app's CSS entry:

```css
@import "trix-core/style.css";
```

Then use the component classes in your HTML:

Example markup:

```html
<button class="dn-btn dn-btn-primary" type="button">Primary action</button>
<button class="dn-btn dn-btn-soft" type="button">Secondary</button>

<input class="dn-input" type="email" placeholder="Email address" />

<div class="dn-card">
  <h2>Card heading</h2>
  <p>Example text inside a styled card component.</p>
</div>
```

The compiled stylesheet includes Tailwind's base reset, Trix UI semantic styles, theme defaults, and the current app-shell layout classes. Consuming projects do not need Tailwind just to use the included styles. For plain HTML without a bundler, copy `node_modules/trix-core/dist/trix-ui.css` into your public assets and link it:

```html
<link rel="stylesheet" href="/assets/trix-ui.css" />
```

### Core component variants

Buttons support `dn-btn-primary`, `dn-btn-soft`, `dn-btn-outline`, `dn-btn-ghost`, `dn-btn-danger`, `dn-btn-link`, `dn-btn-sm`, `dn-btn-lg`, `dn-btn-icon`, and `dn-btn-block`. Native `disabled` buttons are styled and disabled; set both `aria-busy="true"` and `disabled` while an action is in progress to prevent duplicate submissions. Icon-only buttons need an accessible name, such as `aria-label`.

Group adjacent buttons with `dn-btn-group` and give the group an accessible name:

```html
<div class="dn-btn-group" role="group" aria-label="View options">
  <button class="dn-btn dn-btn-soft" type="button" aria-pressed="true">Grid</button>
  <button class="dn-btn dn-btn-ghost" type="button" aria-pressed="false">List</button>
</div>
```

Inputs support native disabled styling and `aria-invalid="true"` validation styling. Associate hints or errors with the input using `aria-describedby`; use `dn-field-error` for error text:

```html
<label class="dn-field">
  <span>Email address</span>
  <input class="dn-input" type="email" aria-invalid="true" aria-describedby="email-error" />
  <small class="dn-field-error" id="email-error">Enter a valid email address.</small>
</label>
```

Native checkbox and radio controls can use `dn-choice`; wrap related radios in `dn-fieldset` with a `dn-fieldset-legend`. Use `dn-choice-card` for selectable cards and `dn-switch` with `role="switch"` for switch semantics. Native select, textarea, and range inputs share the `dn-input` field styling.

The layout primitives include `dn-container`, `dn-grid` with `dn-grid-2` / `dn-grid-3`, `dn-stack`, `dn-cluster`, `dn-divider`, `dn-aspect` (customize with `--dn-aspect-ratio`), `dn-page-header`, and `dn-footer`. On screens up to 760px wide, the `.dn-sidebar-toggle` button controls the sidebar navigation using `aria-expanded` / `aria-controls`, while `.dn-bottom-nav` provides fixed, safe-area-aware mobile navigation. Replace the demo links with your app routes and maintain `aria-current="page"` on the active link. Use `data-mobile-expanded="true"` to render the sidebar expanded initially on mobile. Use `dn-help-text` for supporting field or content text.

Use a labeled `<nav aria-label="Breadcrumb">` with an ordered list and `aria-current="page"` on the current item. Pagination uses a separate labeled nav and list; use real URLs for page links, mark the current link with `aria-current="page"`, and render unavailable previous/next actions as non-interactive elements with `aria-disabled="true"`. These styles provide presentation and semantics; connecting pagination links to data is the consuming app's responsibility.

Input groups use `dn-input-group` around one or more `.dn-input` controls, text addons (`dn-input-group__addon`), and optional buttons. Keep the actual field label outside the group, and add a specific accessible name to each input when a group contains multiple controls:

```html
<label class="dn-field">
  <span>Monthly price</span>
  <span class="dn-input-group">
    <span class="dn-input-group__addon">$</span>
    <input class="dn-input" type="number" aria-label="Price in dollars" />
    <span class="dn-input-group__addon">/ month</span>
  </span>
</label>
```

The demo's orders table is interactive and client-side: search matches customer, product, status, or value; the status filter and page-size selector update the result set; sortable headers toggle direction; row checkboxes and the header checkbox select rows on the current page; and pagination renders the matching rows. This behavior is demo code in `src/main.js`, not part of the CSS package API. Connect the same controls to your app's data layer for production use.

Cards support `dn-card-elevated`, `dn-card-horizontal`, `dn-card-flat`, and `dn-card-accent`. Use `dn-card-media` with `dn-card__media` and `dn-card__body` for a cover layout, `dn-card-stat` for a metric card, or `dn-card-profile` and `dn-card-quote` for people and testimonial layouts. `dn-card-gallery` provides a responsive grid for showcasing multiple cards. Badges have `dn-badge-success`, `dn-badge-warning`, `dn-badge-danger`, and `dn-badge-info` variants. Alerts support `dn-alert-success`, `dn-alert-warning`, `dn-alert-danger`, and `dn-alert-info`; use `role="status"` for non-urgent updates and `role="alert"` for important errors.

All component colors use semantic theme tokens so variants track the active theme and dark mode.

### Native dialog modal

The stylesheet provides presentation only; open modal dialogs with the browser's `showModal()` API. Native dialogs provide modal focus handling, make the background inert, close on Escape, and restore focus to the opener:

```html
<button class="dn-btn dn-btn-primary" type="button" data-dn-dialog-open="confirm-dialog">
  Open dialog
</button>

<dialog class="dn-dialog" id="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-description">
  <div class="dn-dialog__content">
    <h2 id="confirm-title">Confirm changes?</h2>
    <p class="dn-dialog__description" id="confirm-description">This action will update your workspace.</p>
    <form method="dialog">
      <button class="dn-btn dn-btn-ghost" value="cancel">Cancel</button>
      <button class="dn-btn dn-btn-primary" value="confirm">Confirm</button>
    </form>
  </div>
</dialog>
```

Add a small delegated handler to open dialogs (the `method="dialog"` form closes it without additional JavaScript):

```js
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const trigger = event.target.closest("[data-dn-dialog-open]");
  if (!(trigger instanceof HTMLButtonElement)) return;

  const dialog = document.getElementById(trigger.dataset.dnDialogOpen);
  if (!(dialog instanceof HTMLDialogElement)) {
    throw new Error(`Dialog not found: ${trigger.dataset.dnDialogOpen}`);
  }
  dialog.showModal();
});
```

The stylesheet includes four optional motion patterns: `.dn-dialog` fades and scales in, `.dn-dialog--fade` fades without moving, `.dn-dialog--slide-up` rises into place, and `.dn-dialog--sheet` slides in from the right. Set `--dn-dialog-duration` to a CSS time value such as `450ms` on `:root` or an individual dialog to adjust the opening and closing speed. The demo includes a range control that adjusts this value from 0.10 to 1.00 seconds. The side sheet can opt into backdrop light-dismiss with `data-dn-backdrop-close`; all patterns respect `prefers-reduced-motion`. Keep a visible close or cancel action inside every dialog as well.

### Popover dropdown

Use the browser's Popover API to toggle a dropdown without JavaScript. It provides Escape and light-dismiss behavior. Give each trigger a unique anchor name and associate it with its menu:

```html
<div class="dn-dropdown" style="anchor-scope: --actions-trigger">
  <button
    class="dn-btn dn-btn-soft dn-dropdown__trigger"
    type="button"
    popovertarget="actions-menu"
    style="anchor-name: --actions-trigger"
    aria-controls="actions-menu"
  >
    Actions
  </button>
  <div
    class="dn-dropdown__menu"
    id="actions-menu"
    popover="auto"
    style="position-anchor: --actions-trigger"
  >
    <a class="dn-dropdown__item" href="#edit">Edit</a>
    <a class="dn-dropdown__item" href="#duplicate">Duplicate</a>
  </div>
</div>
```

Modern browsers use CSS anchor positioning to place the menu by its trigger. The demo includes a small JavaScript fallback for positioning on browsers with the Popover API but without CSS anchor positioning. The CSS-only package can still style the popover; consuming apps that support older browsers should add an equivalent positioning fallback.

### Component naming convention

The design language uses a `dn-` prefix to keep it distinct and predictable:

- `dn-btn`
- `dn-btn-primary`
- `dn-btn-soft`
- `dn-btn-ghost`
- `dn-input`
- `dn-card`
- `dn-table`
- `dn-nav`
- `dn-dialog`
- `dn-dropdown__menu`

This keeps component styling consistent without overloading generic utility classes.

## Theming

The prototype includes a simple theme system driven by `data-theme` and light/dark preference handling.

Examples:

```html
<html data-theme="default">
```

```html
<html data-theme="ocean">
```

The theme variables are defined in `src/trix-ui.css`. The current presets are `default`, `ocean`, `forest`, and `sunset`. Toggle forced dark mode by adding `class="dark"` to `<html>`.

## Project structure

```text
.
├── src/
│   ├── main.js
│   ├── styles.css
│   ├── trix-ui.css
│   └── library.js
├── index.html
├── tailwind-ui-kit-plan.md
├── README.md
├── package.json
├── vite.config.js
├── scripts/
│   └── smoke-consumer.mjs
├── .gitignore
└── dist/   (generated after build)
```

## Current status

This is an early prototype. `npm run build` creates both the demo site and a standalone stylesheet at `dist/trix-ui.css`. The current component wave demonstrates:

- layout + dashboard shell, responsive grid/stack helpers, dividers, aspect ratio, page header and footer
- button variants, grouped buttons, and disabled/loading states
- form controls with invalid, disabled, radio, checkbox, switch, select, textarea, and range examples
- cards with elevated and horizontal variants
- semantic badges and status alerts
- searchable, filterable, sortable tables with pagination and row selection, plus feed/list patterns
- navbar, native dialog, and Popover API dropdown examples

The packed stylesheet is also checked in an isolated Vite consumer app by `npm run test:consumer`; that consumer does not install Tailwind.

## Development workflow

Use the repo like this:

1. Add reusable tokens or component classes in `src/trix-ui.css`; add theme and shell refinements in `src/styles.css`
2. Render it in `src/main.js`
3. Validate with:

```bash
npm run build
```

4. Verify the packed stylesheet imports into an isolated Vite app without Tailwind:

```bash
npm run test:consumer
```

5. Iterate on theme and spacing until the component feels consistent across all variants

## Roadmap

Planned expansion includes:

- reusable sidebar variants
- modal and dropdown interactions
- complete auth screens
- dashboard templates
- tables with filters and actions
- browser-based accessibility and visual tests
- package distribution metadata and release workflow

## Notes

This repo is intentionally lightweight and focused on proving the design system direction. It is meant to evolve into a full component library while remaining accessible, simple, and easy to use without framework lock-in.

For the full system direction and product plan, see [tailwind-ui-kit-plan.md](./tailwind-ui-kit-plan.md).
