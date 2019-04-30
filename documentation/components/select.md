## Overview

The **Select** component, used along with one or more options, creates a drop-down list of options.

Read more: https://www.w3schools.com/tags/tag_select.asp

## Example

```html
<spectrum-select>
    <option value="chocolate" label="Chocolate" />
    <option value="vanilla" label="Vanilla" />
    <option value="strawberry" label="Strawberry" />
</spectrum-select>
```

## Variants

### Quiet

The `quiet` attribute applies a quiet appearance to the button. We can apply `multiple`, `disabled`, `value` attributes as well with quiet to give the specifc appearances.

```html
<spectrum-select quiet>
    <option value="chocolate" label="Chocolate" />
    <option value="vanilla" label="Vanilla" />
    <option value="strawberry" label="Strawberry" />
</spectrum-select>
```

### Required

This prop enforces the user to select at least one option from the list.

```html
<spectrum-select required>
    <option value="chocolate" label="Chocolate" />
    <option value="vanilla" label="Vanilla" />
    <option value="strawberry" label="Strawberry" />
</spectrum-select>
```

### Stay open on select

By default the popover list closes when a new value is selected. However, if we want the list to remain open we can achieve this by passing a `false` value to `closeOnSelect` prop.

```html
<spectrum-select close-on-select="false">
    <option value="chocolate" label="Chocolate" />
    <option value="vanilla" label="Vanilla" />
    <option value="strawberry" label="Strawberry" />
</spectrum-select>
```

## States

`Select` has a number of props for controlling its visual state. It supports the `disabled` prop, which applies a disabled style to the component, and also prevents clicks from activating it. It also support the `invalid` prop to apply an invalid appearance to the select component.

### Invalid

```html
<spectrum-select invalid>
    <option value="chocolate" label="Chocolate" />
    <option value="vanilla" label="Vanilla" />
    <option value="strawberry" label="Strawberry" />
</spectrum-select>
```

### Disabled

```html
<spectrum-select disabled>
    <option value="chocolate" label="Chocolate" />
    <option value="vanilla" label="Vanilla" />
    <option value="strawberry" label="Strawberry" />
</spectrum-select>
```

<!--
## Handling Events

Events handlers for change, open and close can be registered on a `Select` component as shown below.

<spectrum-select
  onChange={e => console.log(e, 'changed')}
  onOpen={e => console.log(e, 'opened')}
  onClose={e => console.log(e, 'closed')}
  options={[
    {label: 'Chocolate',value: 'chocolate'},
    {label: 'Vanilla',value: 'vanilla'},
    {label: 'Strawberry',value: 'strawberry'}
  ]}
/>

```html
<spectrum-select
  onChange={e => console.log(e, 'changed')}
  onOpen={e => console.log(e, 'opened')}
  onClose={e => console.log(e, 'closed')}
  options={[
    {label: 'Chocolate',value: 'chocolate'},
    {label: 'Vanilla',value: 'vanilla'},
    {label: 'Strawberry',value: 'strawberry'}
  ]}
/>
```

## Internationalization

To internationalize a select, localized strings should be passed to the `label` field of the options prop.

## Accessibility

Select component is accessible by default. The correct aria roles will automatically be applied.

-->
