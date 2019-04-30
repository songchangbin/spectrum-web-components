## Overview

A popover is used to display transient content (menus, options, additional actions etc.)
and appears when clicking/tapping on a source (tools, buttons, etc.) It stands out via its
visual style (stroke and drop shadow) and floats on top of the rest of the interface.

## Example

```jsx
<spectrum-overlay-trigger trigger="click" placement="right">
    <spectrum-button slot="trigger" label="Click" variant="primary" />
    <spectrum-popover slot="content" title="spectrum-popover title">
        <div slot="content">spectrum-popover content goes here...</div>
    </spectrum-popover>
</spectrum-overlay-trigger>
```

### Variant

#### Default

```jsx
<spectrum-overlay-trigger trigger="click" placement="top">
    <spectrum-button slot="trigger" label="default" variant="primary" />
    <spectrum-popover
        slot="content"
        title="spectrum-popover title"
        variant="default"
    >
        <div slot="content">spectrum-popover content goes here..</div>
    </spectrum-popover>
</spectrum-overlay-trigger>
```

<!--
#### Error

<spectrum-overlay-trigger trigger="click" placement="right">
  <spectrum-button label="error" variant="primary" />
  <spectrum-popover title="spectrum-popover title" variant="error">
    spectrum-popover content goes here...
  </spectrum-popover>
</spectrum-overlay-trigger>

```jsx
<spectrum-overlay-trigger trigger="click" placement="right">
  <spectrum-button label="error" variant="primary" />
  <spectrum-popover title="spectrum-popover title" variant="error">
    spectrum-popover content goes here...
  </spectrum-popover>
</spectrum-overlay-trigger>
``` -->
