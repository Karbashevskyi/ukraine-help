/**
 * {
 *   CURRENT: String of current name, // automate add to name as prefix a new data: [versionApp]
 *   PREVIOUS: Array with full name about prev names, e.g. with version app: `[0.0.1]1.0`; template `[versionApp]prevName`,
 *   CHECKED: Boolean, if initial value is "true" when fn will ignore check previous names.
 * }
 */
export const LocalStorageConst = {
  COMMON: {
    VERSION_APP: {
      CURRENT: `0.0`,
      PREVIOUS: [`versionApp`],
      CHECKED: false,
      DONT_CHECK_VERSION: true
    },
    PREV_VERSION_APP: {
      CURRENT: `0.1`,
      PREVIOUS: [],
      CHECKED: false,
      DONT_CHECK_VERSION: true
    },
    LANGUAGE_CODE: {
      CURRENT: `0.2`,
      PREVIOUS: [`languageCode`],
      CHECKED: false,
      DONT_CHECK_VERSION: true
    },
    TOKEN: {
      CURRENT: `0.3`,
      PREVIOUS: [`token`],
      CHECKED: false,
      DONT_CHECK_VERSION: true
    },
  },
  MODULES: {
  },
  TABLES: {
  }
};
