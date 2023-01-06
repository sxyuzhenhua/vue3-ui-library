---
title: Button
lang: en-US
---

# Button

Commonly used button.

## Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

button/basic

:::


## Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

button/disabled

:::


## Link Button

:::demo

button/link

:::

## Text Button

:::demo

button/text

:::

## Icon Button
Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element Plus icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

button/icon

:::

## Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<yu-button-group>` to group your buttons.

button/group

:::

## Loading Button

Click the button to load data, then the button displays a loading state.

Set `loading` attribute to `true` to display loading state.

:::tip

You can use the `loading` slot or `loadingIcon` to customize your loading component

ps: `loading` slot has higher priority than loadingIcon

:::

:::demo

button/loading

:::

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `large`, `small`.

button/size

:::

## Custom Color <VersionTag version="beta" />

You can custom button color.

We will calculate hover color & active color automatically.

:::demo

button/custom

:::

## Button Attributes

| Name                                | Description                                                             | Type                  | Accepted Values                                               | Default |
| ----------------------------------- | ----------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------- | ------- |
| size                                | button size                                                             | string                | large / default /small                                        | —       |
| type                                | button type                                                             | string                | primary / success / warning / danger / info / <del>text</del> | —       |
| plain                               | determine whether it's a plain button                                   | boolean               | —                                                             | false   |
| text <VersionTag version="2.2.0" /> | determine whether it's a text button                                    | boolean               | —                                                             | false   |
| bg <VersionTag version="2.2.0" />   | determine whether the text button background color is always on         | boolean               | —                                                             | false   |
| link <VersionTag version="2.2.1" /> | determine whether it's a link button                                    | boolean               | —                                                             | false   |
| round                               | determine whether it's a round button                                   | boolean               | —                                                             | false   |
| circle                              | determine whether it's a circle button                                  | boolean               | —                                                             | false   |
| loading                             | determine whether it's loading                                          | boolean               | —                                                             | false   |
| loading-icon                        | customize loading icon component                                        | `string \| Component` | —                                                             | Loading |
| disabled                            | disable the button                                                      | boolean               | —                                                             | false   |
| icon                                | icon component                                                          | `string \| Component` | —                                                             | —       |
| autofocus                           | same as native button's `autofocus`                                     | boolean               | —                                                             | false   |
| native-type                         | same as native button's `type`                                          | string                | button / submit / reset                                       | button  |
| auto-insert-space                   | automatically insert a space between two chinese characters             | boolean               |                                                               | —       |
| color                               | custom button color, automatically calculate `hover` and `active` color | string                |                                                               | —       |
| dark                                | dark mode, which automatically converts `color` to dark mode colors     | boolean               |                                                               | false   |