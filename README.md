# Instant Platform Landingpage

## Introduction

The purpose of this NEXT.JS project is to produce customer specific static landing pages for an Azure Virtual Desktop (AVD). Those landing pages are supposed to be deployed to a simple webserver that can only be accessed via a special kps.com subdomain on the AVD.

## Developer guide

### Setup

- `npm install`

### Development

1. `npm run dev`
2. Open `http://localhost:3000` in your favorite browser.

### Build

Running `npm build` creates an artefact of the static landing pages in the `out` folder. In order to check the created artefact you can use any local webserver or just run `npm start`.

## Configuration

### Languages

Currently the landing pages are exported in German and English. The languages that should be created are configured in [`config.ts`](/app/config.ts).

#### Adding a new language

To make the export work with a new language, you need to add the new language to other places aswell:

1. Copy one language folder from `app/i18n/translations` and rename it to your new language code (Example: "`fr`").
2. In `translate.ts` you need to import the new language and add them to all contexts of the `TRANSLATIONS` object.
3. All pages will be accessible with the new language, but will not show any content. In order to add content, you can simply copy one language folder from `app/i18n/content` and translate the content of each page.

### Customers

The export will create one folder for each customer which are specified in the [`config.ts`](/app/config.ts) file.

#### Adding a new customer

In order to create a landing page instance for a new customer we basically only need a SVG logo of the customer and some meta information.

1. Add the new customer into the customer array in [`config.ts`](/app/config.ts). This is also the URL slug which should be in kebab-case.
2. The logo needs to be added to the `public/customers` folder. The filename must match the name of the customer like above.

## Translations

Besides the i18n for the page content, we have the possibility to translate static textual information which is used as translation keys, for example in buttons and other reoccuring elements.

To add new translation keys, you need to add them to the files under `app/i18n/translations/<LANG>` for each language. The structure should be kept in sync throughout all language files.

In the application you can make use of the custom `useLocale` hook. When using the hook, you need to specify a translation context. Each context represents a specific JSON file that includes the translations for that context. Since the hook uses the useParams hook, any component using translations need to be a client component by adding `"use client";` at the top of the file. In best case only the leaves of the component tree include the needed translations. But since this project is meant to be statically exported, this best practice is not that critical.

```
// Using the hook
const { t } = useLocale(TRANSLATION_CONTEXT.HEADER);

// How to translate a key
{t("sap-system")}
```

If you want to add a new context, you need to amend the `TRANSLATION_CONTEXT` enum.

## Google Maps integration

One plan was to integrate a map (see file [`page.tsx`](/app/%5Bcustomer%5D/%5Blang%5D/sap-structure/page.tsx)) via the official Google Maps JS Api in order to have more control over the way of integration. For that purpose a new project called `instant-platform` was added to the company's Google account and I got access rights to this project. Access can be requested via a service desk ticket.
