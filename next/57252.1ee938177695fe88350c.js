"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[57252],{

/***/ 57252:
/***/ ((module) => {

module.exports = "# Taiga UI — i18n\n\n[![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk.svg)](https://npmjs.com/package/@taiga-ui/i18n)\n[![Discord](https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23taiga-ui&logo=discord&logoColor=white)](https://discord.gg/Us8d8JVaTg)\n\n[Website](https://taiga-ui.dev) • [Documentation](https://taiga-ui.dev/getting-started) •\n[CDK Wiki](https://github.com/tinkoff/taiga-ui/wiki) • [Core team](https://github.com/tinkoff/taiga-ui/#core-team)\n\n<!-- Do not change next line without i18n demo page -->\n\n> A package with tools for Taiga UI library i18n\n\nSupported languages:\n\n| Language             |      Constant name      |\n| -------------------- | :---------------------: |\n| English (by default) |  TUI_ENGLISH_LANGUAGE   |\n| Russian              |  TUI_RUSSIAN_LANGUAGE   |\n| Spanish              |  TUI_SPANISH_LANGUAGE   |\n| German               |   TUI_GERMAN_LANGUAGE   |\n| Turkish              |  TUI_TURKISH_LANGUAGE   |\n| Dutch                |   TUI_DUTCH_LANGUAGE    |\n| Ukrainian            | TUI_UKRAINIAN_LANGUAGE  |\n| French               |   TUI_FRENCH_LANGUAGE   |\n| Vietnamese           | TUI_VIETNAMESE_LANGUAGE |\n| Portuguese           | TUI_PORTUGUESE_LANGUAGE |\n| Italian              |  TUI_ITALIAN_LANGUAGE   |\n| Polish               |   TUI_POLISH_LANGUAGE   |\n| Chinese              |  TUI_CHINESE_LANGUAGE   |\n\n<!-- Do not change next line without i18n demo page -->\n\nIt's a part of [**Taiga UI**](https://github.com/tinkoff/taiga-ui) that is fully-treeshakable Angular UI Kit consisting\nof multiple base libraries and several add-ons\n\n## How to install\n\nIf you have [@taiga-ui/core](https://npmjs.com/package/@taiga-ui/core) in your app, you do not need to install anything.\ni18n package is included as a dependency.\n\n## How to use\n\nYou have English by default.\n\nIf you want to change it, you need to provide `TUI_LANGUAGE` token in your app.module:\n\n**./app.module.ts**\n\n```ts\nimport {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';\n\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: TUI_LANGUAGE,\n      useValue: of(TUI_RUSSIAN_LANGUAGE),\n    },\n  ],\n})\nexport class AppModule {}\n```\n\nYou can also switch languages on the fly. Use `useFactory` or `useClass` with a service to make a stream of\ndictionaries.\n\n## How to add a language\n\nFeel free to add new languages!\n\n1. Go to `languages` folder\n2. Copy `english` folder and rename new folder with the name of language you speak\n3. Translate entities in files. If you need some clarification, take a look at interfaces of entities. If you need more,\n   please write to us via issues or any other way of contact :)\n\n**./serbian/index.ts**\n\n```ts\nimport {TuiLanguage, TuiLanguagePreview} from '@taiga-ui/i18n';\nimport {TUI_SERBIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';\nimport {TUI_SERBIAN_LANGUAGE_ADDON_TABLE} from './addon-table';\nimport {TUI_ENGLISH_LANGUAGE_ADDON_EDITOR} from './addon-editor';\nimport {TUI_SERBIAN_LANGUAGE_CORE} from './core';\nimport {TUI_SERBIAN_LANGUAGE_KIT} from './kit';\n\nconst TUI_SERBIAN_LANGUAGE_PREVIEW: TuiLanguagePreview = {\n  previewTexts: {rotate: 'rotiraj'},\n  zoomTexts: {\n    zoomOut: 'odzumiraj',\n    zoomIn: 'zumiraj',\n    reset: 'reset',\n  },\n};\n\nexport const TUI_SERBIAN_LANGUAGE: TuiLanguage = {\n  ...TUI_SERBIAN_LANGUAGE_CORE,\n  ...TUI_SERBIAN_LANGUAGE_KIT,\n  ...TUI_SERBIAN_LANGUAGE_ADDON_TABLE,\n  ...TUI_SERBIAN_LANGUAGE_ADDON_COMMERCE,\n  ...TUI_ENGLISH_LANGUAGE_ADDON_EDITOR,\n  ...TUI_SERBIAN_LANGUAGE_PREVIEW,\n  name: 'serbian',\n};\n```\n\n**./app.module.ts**\n\n```ts\nimport {TUI_LANGUAGE} from '@taiga-ui/i18n';\nimport {TUI_SERBIAN_LANGUAGE} from './serbian';\n\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: TUI_LANGUAGE,\n      useValue: of(TUI_SERBIAN_LANGUAGE),\n    },\n  ],\n})\nexport class AppModule {}\n```\n\nThank you!\n";

/***/ })

}]);