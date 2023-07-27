import global_de from "../i18n/translations/de/global.json";
import global_en from "../i18n/translations/en/global.json";
import header_de from "../i18n/translations/de/header.json";
import header_en from "../i18n/translations/en/header.json";
import topnavigation_de from "../i18n/translations/de/topnavigation.json";
import topnavigation_en from "../i18n/translations/en/topnavigation.json";

export enum TRANSLATION_CONTEXT {
  HEADER = "header",
  GLOBAL = "global",
  TOPNAVIGATION = "topnavigation",
}

const TRANSLATIONS: any = {
  [TRANSLATION_CONTEXT.GLOBAL]: {
    de: global_de,
    en: global_en,
  },
  [TRANSLATION_CONTEXT.HEADER]: {
    de: header_de,
    en: header_en,
  },
  [TRANSLATION_CONTEXT.TOPNAVIGATION]: {
    de: topnavigation_de,
    en: topnavigation_en,
  },
};

const translate =
  (language = "en", context = "global") =>
  (token: string) => {
    let value = TRANSLATIONS[context][language][token];
    if (!value) {
      value = token;
    }
    return value;
  };

export default translate;
