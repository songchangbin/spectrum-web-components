## Overview

A **spectrum-button** represents an action a user can take. spectrum-buttons can be clicked or tapped to perform an action or to navigate to another page. spectrum-buttons in Spectrum have several variations for different uses and multiple levels of loudness for various attention-getting needs.

## Example

```html
<sp-button>Hello world</sp-button>
```

<sp-button>Hello world</sp-button>

## Variants

There are many spectrum-button variants to choose from in Spectrum. The `variant` prop controls the main variant of the spectrum-button, and a few other boolean props can be combined to apply sub-variants, e.g. `quiet` and `logic`.

### Normal spectrum-buttons

```html
<spectrum-button variant="cta">CTA</spectrum-button>
<spectrum-button variant="primary">Primary</spectrum-button>
<spectrum-button variant="secondary">Secondary</spectrum-button>
<spectrum-button variant="warning">Warning</spectrum-button>
```

### Quiet spectrum-buttons

```html
<spectrum-button quiet variant="primary">Quiet Primary</spectrum-button>
<spectrum-button quiet variant="secondary">Quiet Secondary</spectrum-button>
<spectrum-button quiet variant="warning">Quiet Warning</spectrum-button>
```

### Action spectrum-buttons

```html
<spectrum-button variant="action">Action</spectrum-button>
<spectrum-button quiet variant="action">Quiet Action</spectrum-button>
```

<!--
### Tool spectrum-buttons

<spectrum-button variant="tool" icon={<Brush />} aria-label="Brush" />

```jsx
<spectrum-button variant="tool" icon={<Brush />} aria-label="Brush" />
```

### Logic spectrum-buttons

<spectrum-button logic variant="and">And</spectrum-button>
<spectrum-button logic variant="or">Or</spectrum-button>

```jsx
<spectrum-button logic variant="and">And</spectrum-button>
<spectrum-button logic variant="or">Or</spectrum-button>
```

## Content

spectrum-buttons can have a label, and icon, or both. An icon is provided by passing an icon component to the `icon` prop. A label can either be provided as a child to the spectrum-button, or through the `label` prop.

<spectrum-button variant="primary">Label only</spectrum-button>
<spectrum-button variant="primary" icon={<Bell />}>Icon + Label</spectrum-button>
<spectrum-button variant="primary" icon={<Bell />} aria-label="Bell" />

```jsx
<spectrum-button variant="primary">Label only</spectrum-button>
<spectrum-button variant="primary" icon={<Bell />}>Icon + Label</spectrum-button>
<spectrum-button variant="primary" icon={<Bell />} />
```

## States

In addition to the variant, spectrum-buttons have a number of props for controlling their visual state. All spectrum-button variants support the `disabled` prop, which applies a disabled style to the spectrum-button, and also prevents clicks from activating it. The `action` and `tool` variants also support the `selected` prop to apply a selected appearance to the spectrum-button.

<spectrum-button variant="action">Normal</spectrum-button>
<spectrum-button variant="action" disabled>Disabled</spectrum-button>
<spectrum-button variant="action" selected>Selected</spectrum-button>

```jsx
<spectrum-button variant="action">Normal</spectrum-button>
<spectrum-button variant="action" disabled>Disabled</spectrum-button>
<spectrum-button variant="action" selected>Selected</spectrum-button>
```

## Handling Events

Events handlers for clicks and other user actions can be registered on a `spectrum-button` just as a normal `spectrum-button` element in React.

```jsx
<spectrum-button onClick={e => alert('spectrum-button clicked!')}>Click me!</spectrum-button>
```

<spectrum-button onClick={e => alert('spectrum-button clicked!')}>Click me!</spectrum-button>

## Internationalization

To internationalize a spectrum-button, a localized string should be passed to the `label` prop of the spectrum-button, or as a child.

## Accessibility

spectrum-buttons are accessible by default, rendered in HTML using the `<spectrum-button>` element.

### Labelling icon-only spectrum-buttons

For an icon-only spectrum-button, an alternative text label must be provided to identify the control for accessibility. This should be added using the `aria-label` prop on the spectrum-button element.

<spectrum-button
  variant="tool"
  icon={<StepBackward />}
  aria-label="Step Backward" />
<spectrum-button
  variant="tool"
  icon={<Play />}
  aria-label="Play" />
<spectrum-button
  variant="tool"
  icon={<StepForward />}
  aria-label="Step Forward" />

```jsx
<spectrum-button
  variant="tool"
  icon={<StepBackward />}
  aria-label="Step Backward" />
<spectrum-button
  variant="tool"
  icon={<Play />}
  aria-label="Play" />
<spectrum-button
  variant="tool"
  icon={<StepForward />}
  aria-label="Step Forward" />
```

### autoFocus

The `autoFocus` prop sets focus to the spectrum-button when the component mounts. This is useful for setting focus to a specific spectrum-button when a Popover or Dialog opens.

```jsx
<spectrum-button autoFocus>Confirm</spectrum-button>
``` -->
