---
title: Icon
lang: en-US
---
# Icon

Element Plus provides a set of common icons.

## Icon Usage

- If you want to **use directly** like the example, you need to [globally register](https://v3.vuejs.org/guide/component-registration.html#global-registration) the components before using it.

- If you want to see all available SVG icons please check [@element-plus/icons-vue@1.x](https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/)[@element-plus/icons-vue@latest](https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/) and the source [element-plus-icons](https://github.com/element-plus/element-plus-icons) out or [Icon Collection](#icon-collection)

## Installation

### Using packaging manager

```shell
# Choose a package manager you like.

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```

### Register All Icons

You need import all icons from `@element-plus/icons-vue` and register them globally.

```ts
// main.ts

// if you're using CDN, please remove this line.
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

You can also refer to [this template](https://codepen.io/sxzz/pen/xxpvdrg).

### Import in Browser

Import Element Plus Icons through browser HTML tags directly, and use global variable `ElementPlusIconsVue`.

According to different CDN providers, there are different introduction methods.
Here we use [unpkg](https://unpkg.com) and [jsDelivr](https://jsdelivr.com) as example.
You can also use other CDN providers.

#### unpkg

```html
<script src="//unpkg.com/@element-plus/icons-vue"></script>
```

#### jsDelivr

```html
<script src="//cdn.jsdelivr.net/npm/@element-plus/icons-vue"></script>
```

:::tip

We recommend using CDN to import Element Plus users to lock the version
on the link address, so as not to be affected by incompatible updates when Element Plus
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.

:::

### Auto Import

Use [unplugin-icons](https://github.com/antfu/unplugin-icons) and [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
to automatically import any icon collections from iconify.
You can refer to [this template](https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58).

## Simple Usage

:::warning

Because HTML standard has already defined a tag named [menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu),
so you need to use an alias in order to render the icon, if you register `Menu` directly it will not work.

:::

```vue
<!-- Use yu-icon to provide attributes to SVG icon -->
<template>
  <div>
    <yu-icon :size="size" :color="color">
      <Edit />
    </yu-icon>
    <!-- Or use it independently without derive attributes from parent -->
    <Edit />
  </div>
</template>
```

<vp-script setup>
import { Edit, Share, Delete, Search, Loading } from '@element-plus/icons-vue'
</vp-script>

<YuRow>
  <div>
    <YuIcon :size="30">
      <Edit />
    </YuIcon>
    <Edit />
  </div>
</YuRow>

## Combined with yu-icon

`yu-icon` provides extra attributes for raw SVG icon, for more detail, please read to the end.

```vue
<template>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <yu-icon :size="20">
    <Edit />
  </yu-icon>
  <yu-icon color="#409EFC" class="no-inherit">
    <Share />
  </yu-icon>
  <yu-icon>
    <Delete />
  </yu-icon>
  <yu-icon class="is-loading">
    <Loading />
  </yu-icon>
  <yu-button type="primary">
    <yu-icon style="vertical-align: middle">
      <Search />
    </yu-icon>
    <span style="vertical-align: middle"> Search </span>
  </yu-button>
</template>
```

<YuRow>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
    <YuIcon :size="20">
      <Edit />
    </YuIcon>
    <YuIcon color="#409EFC" class="no-inherit">
      <Share />
    </YuIcon>
    <YuIcon>
      <Delete />
    </YuIcon>
    <YuIcon class="is-loading">
      <Loading />
    </YuIcon>
    <YuButton type="primary">
      <YuIcon style="vertical-align: middle; color: #fff;">
        <Search />
      </YuIcon>
      <span style="vertical-align: middle;"> Search </span>
    </YuButton>
  </div>
</YuRow>

## Using SVG icon directly

```vue
<template>
  <div style="font-size: 20px">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <Share style="width: 1em; height: 1em; margin-right: 8px" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</template>
```

<YuRow>
  <div style="font-size: 20px;">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <Share style="width: 1em; height: 1em; margin-right: 8px;" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <Search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
</YuRow>

## Icon Collection

:::tip

**You can use SVG icon in any version** as long as you install it

**You can click the icon to copy it**

:::

<IconList />

## Icon Attributes

| Name    | Description                | Type                           | Default                |
| ------- | -------------------------- | ------------------------------ | ---------------------- |
| `color` | SVG tag's fill attribute   | `Pick<CSSProperties, 'color'>` | inherit from color     |
| `size`  | SVG icon size, size x size | `number \| string`             | inherit from font size |

## Icon Slots

| Name      | Description               |
| --------- | ------------------------- |
| `default` | customize default content |
