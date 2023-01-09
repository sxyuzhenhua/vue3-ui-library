---
title: Button
lang: en-US
---

# Button 按钮

常用的操作按钮。

## 基础用法

:::demo 使用 `type`, `plain`, `round` 和 `circle` 来定义按钮的样式。

button/basic

:::


## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

:::demo 使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

button/disabled

:::


## 链接按钮

:::demo

button/link

:::

## 文字按钮

:::demo

button/text

:::

## 图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

:::demo 使用 `icon` 属性来为按钮添加图标。 您可以在我们的 Icon 组件中找到所需图标。 通过向右方添加 `<i>` 标签来添加图标， 你也可以使用自定义图标。

button/icon

:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用 `<yu-button-group>` 对多个按钮分组。

button/group

:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

:::tip

您可以使用  `loading` 插槽或  `loadingIcon` 属性自定义您的loading图标

ps: `loading` 插槽优先级高于 `loadingIcon` 属性

:::

:::demo

button/loading

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

:::demo 使用 `size` 属性额外配置尺寸，可使用 `large`, `small` 两种值.

button/size

:::

## 自定义颜色 <VersionTag version="beta" />

您可以自定义按钮颜色。

我们将自动计算 hover 和 active 颜色。

:::demo

button/custom

:::

## Button 属性
			
| 属性名                                | 说明                                                             | 类型                  | 默认值 Values                                               | Default |
| ----------------------------------- | ----------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------- | ------- |
| size                                | 尺寸                                                             | string                | large / default /small                                        | —       |
| type                                | 类型                                                            | string                | primary / success / warning / danger / info / <del>text</del> | —       |
| plain                               | 是否为朴素按钮                                   | boolean               | —                                                             | false   |
| text <VersionTag version="2.2.0" /> | 是否为文字按钮                                   | boolean               | —                                                             | false   |
| bg <VersionTag version="2.2.0" />   | 是否显示文字按钮背景颜色         | boolean               | —                                                             | false   |
| link <VersionTag version="2.2.1" /> | 是否为链接按钮                                    | boolean               | —                                                             | false   |
| round                               | 是否为圆角按钮                                   | boolean               | —                                                             | false   |
| circle                              | 是否为圆形按钮                                  | boolean               | —                                                             | false   |
| loading                             | 是否为加载中状态                                          | boolean               | —                                                             | false   |
| loading-icon                        | 自定义加载中状态图标组件                                        | `string \| Component` | —                                                             | Loading |
| disabled                            | 按钮是否为禁用状态                                                      | boolean               | —                                                             | false   |
| icon                                | icon component                                                        | `string \| Component` | —                                                             | —       |
| autofocus                           | 原生 `autofocus` 属性                                      | boolean               | —                                                             | false   |
| native-type                         | 原生 `type` 属性                                         | string                | button / submit / reset                                       | button  |
| auto-insert-space                   | 自动在两个中文字符之间插入空格             | boolean               |                                                               | —       |
| color                               | 自定义按钮颜色, 并自动计算 `hover` 和 `active` 触发后的颜色| string                |                                                               | —       |
| dark                                | dark 模式, 意味着自动设置 `color` 为 dark 模式的颜色     | boolean               |                                                               | false   |


## Button 插槽

| Name    | Description                 |
| ------- | --------------------------- |
| —       | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

## Button-Group 属性

| Name | Description                                      | Type   | Accepted Values                             | Default |
| ---- | ------------------------------------------------ | ------ | ------------------------------------------- | ------- |
| size | control the size of buttons in this button-group | string | large / default /small                      | —       |
| type | control the type of buttons in this button-group | string | primary / success / warning / danger / info | —       |

## Button-Group 插槽

| Name | Description                    | Subtags |
| ---- | ------------------------------ | ------- |
| -    | customize button group content | Button  |
