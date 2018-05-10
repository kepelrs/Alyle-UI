<div align="center">
  <h1>Alyle UI</h1>
  Minimal Design, a package of components for Angular.
  <br/>
  <a href="https://alyle-ui.firebaseapp.com/">demo</a>
</div>

[![npm](https://img.shields.io/npm/v/@alyle/ui.svg?style=flat-square)](https://npmjs.com/package/alyle-ui)
[![npm](https://img.shields.io/npm/dt/@alyle/ui.svg?style=flat-square)](https://npmjs.com/package/alyle-ui)

## Install Alyle UI

`npm i @alyle/ui -s` or `yarn add @alyle/ui`

## Import

```js
// src/app/app.module.ts

import { AlyleUIModule } from '@alyle/ui';
@NgModule({
  imports: [
    AlyleUIModule.forRoot({
      name: 'default'
    }),
  ],
  ...
})
export class AppModule { }
```

## Components

* button
* carousel
* drawer
* header pagination
* icon button
* input
* menu
* radio
* cropping
* ripple
* tabs
* toolbar
