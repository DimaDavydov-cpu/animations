"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[3631],{

/***/ "../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LE: () => (/* binding */ browser_dateTimeFormat),
  ti: () => (/* binding */ browser_fileSizeFormat),
  Qn: () => (/* binding */ browser_getCurrencySymbol),
  jq: () => (/* binding */ browser_numberFormat)
});

// UNUSED EXPORTS: BLOCKED_COUNTRIES, BLOCKED_COUNTRIES_SET, CURRENCY_CODES, CURRENCY_STYLES, DATETIME_ELEMENT_STYLES, DEFAULT_FIVERR_LANGUAGE, DEFAULT_FIVERR_LOCALE, LOCALE_TO_SUBDOMAIN_MAP, MINIMUM_VALIDATED_LANGUAGE_LEVEL, NUMBER_STYLES, SUPPORTED_FIVERR_LANGUAGES, SUPPORTED_FIVERR_LOCALES, SUPPORTED_FIVERR_LOCALES_KEYS, SUPPORTED_FORMATTING_LOCALES, SUPPORTED_FORMATTING_LOCALES_KEYS, SUPPORTED_SELLER_LANGUAGES, calculateFormattingLocale, currencyFormat, getBuyerAssumedLanguage, getFiverrLocaleByFormattingLocale, getFiverrLocaleByLanguageCode, getFiverrLocaleNativeName, getFormattingLocaleNativeName, getLocaleSubdomain, getLocalizationContext, getSellerLanguageNativeName, getSellerValidatedLanguages, getShortLanguageCode, isExistCurrencyCode, isSupportedFiverrLocale, isSupportedFormattingLocale, isSupportedSellerLanguage, replaceLocaleSubdomain, setWindowLocalizationContext, withLocalizationContext, withoutPseudoLocalization

// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js
var emitter = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+obs@1.36.3/node_modules/@fiverr-private/obs/src/logger/emitter/index.js");
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/validateOptions/index.js
/**
 * Validate the formatter options.
 * This function removes all unsupported properties from the 'options' object, while validating
 * the supported options.
 * @param {Object} CONFIG_MAP Mapping of all possible formatter configurations.
 * @param {Object} options Formatter options object to be validated.
 * @returns {Object} Validated formatter options.
 */const validateOptions = (CONFIG_MAP, options) => {
  const validated = {};
  // Assign all default values
  for (const [prop, value] of Object.entries(CONFIG_MAP)) {
    if (value.defaultValue) {
      validated[value.mapTo || prop] = value.defaultValue;
    }
  }
  for (const [inputProp, value] of Object.entries(options)) {
    // Check option key is whitelisted in CONFIG_MAP
    if (CONFIG_MAP[inputProp]) {
      const outputProp = CONFIG_MAP[inputProp].mapTo || inputProp;
      validated[outputProp] = value;
      // Assign validatorFallbackValue if validation function exists and fails
      const validator = CONFIG_MAP[inputProp].validator;
      if (validator && !validator(value)) {
        validated[outputProp] = CONFIG_MAP[inputProp].validatorFallbackValue;
      }
    }
  }
  return validated;
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/currency/constants.js
const CURRENCY_STYLES = {
  CODE: 'code',
  SYMBOL: 'symbol'
};
const CURRENCY_FORMATTING_OPTIONS = {
  style: {
    mapTo: 'currencyDisplay',
    validator: value => Object.values(CURRENCY_STYLES).includes(value),
    validatorFallbackValue: CURRENCY_STYLES.SYMBOL,
    defaultValue: CURRENCY_STYLES.SYMBOL
  },
  minimumFractionDigits: {},
  maximumFractionDigits: {}
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/currencySymbol/constants.js
const DOLLAR_SYMBOL = '$';
const CURRENCY_STYLE_TO_OVERRIDE = 'symbol';
const DOLLAR_SYMBOL_OVERRIDE = {
  MXN: 'MX',
  AUD: 'A',
  CAD: 'CA'
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/currencySymbol/index.js

/**
 * Returns the currency symbol of a specific currency in a specific formattingLocale.
 * Formatting locale is optional. If it's not passed, it is taken from the localizationContext
 * @param {Object} localizationContext - The localization context in the runtime.
 * injected dynamically by the relevant wrapper (withBrowserContext / withMainContext / withModuleContext)
 * @param {string} currencyCode - The currency code you would like to get its symbol, for ex: 'USD'
 * @param {string} formattingLocale - The formatting locale you want to get the symbol in. for ex: 'fr-FR'
 * @returns {string} - The currency symbol. examples: '$' / 'US $' / '€' / 'MX$'
 */
const getCurrencySymbol = _ref => {
  let {
    localizationContext,
    currencyCode,
    formattingLocale = ''
  } = _ref;
  const amount = 1;
  const resolvedFormattingLocale = formattingLocale || localizationContext.formattingLocale;
  const formattedString = amount.toLocaleString(resolvedFormattingLocale, {
    style: 'currency',
    currency: currencyCode
  });
  const parsedOptions = {
    currencyDisplay: CURRENCY_STYLE_TO_OVERRIDE
  };
  const overriddenCurrencySymbolString = overrideCurrencySymbol({
    formattedString,
    currencyCode,
    parsedOptions
  });
  return overriddenCurrencySymbolString.replace(/[0-9]|\.|,/g, '').trim();
};
/**
 * In a few cases (currencies) that the symbol might be '$' we need to make sure to override it,
 * so we won't display '$' as a currency that is not USD.
 * List of currencies we override: CAD AUD MXN
 * Note: We are overriding the symbol only the user requests display of a symbol (and not code)
 * @param {string} formattedString - The formatting string of the entire currency string (ex: '123 $'),
 * @param {string} currencyCode - The currency code that ie being used to format the currency (ex: 'AUD')
 * @param {Object} parsedOptions - The options object the formatter used (passed to Intl) in order to format
 * @returns {string} - The formatted string manipulated with the override currency symbol in it
 */
const overrideCurrencySymbol = _ref2 => {
  let {
    formattedString,
    currencyCode,
    parsedOptions
  } = _ref2;
  if (DOLLAR_SYMBOL_OVERRIDE[currencyCode] && (parsedOptions === null || parsedOptions === void 0 ? void 0 : parsedOptions.currencyDisplay) === CURRENCY_STYLE_TO_OVERRIDE && formattedString.indexOf(DOLLAR_SYMBOL_OVERRIDE[currencyCode]) === -1) {
    return formattedString.replace(DOLLAR_SYMBOL, "".concat(DOLLAR_SYMBOL_OVERRIDE[currencyCode]).concat(DOLLAR_SYMBOL));
  }
  return formattedString;
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/toParts/constants.js
const FORMATTING_PARTS = {
  INTEGER: 'integer',
  DECIMAL: 'decimal',
  FRACTION: 'fraction',
  MINUS_SIGN: 'minusSign',
  LITERAL: 'literal',
  PERCENTAGE: 'percentage',
  CURRENCY: 'currency'
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/utils/toParts/index.js



const isNumeric = c => /\d/.test(c);
const isSpace = c => /\s/.test(c);
const isPercentage = c => c === '%';
const isMinusSign = c => /—|−|-|–|\(|\)/.test(c);
const buildIntegerPart = num => ({
  type: FORMATTING_PARTS.INTEGER,
  value: num
});
const buildLiteralPart = char => ({
  type: FORMATTING_PARTS.LITERAL,
  value: char
});
const buildPercentagePart = char => ({
  type: FORMATTING_PARTS.PERCENTAGE,
  value: char
});
const buildMinusSignPart = char => ({
  type: FORMATTING_PARTS.MINUS_SIGN,
  value: char
});
const buildDecimalPart = char => ({
  type: FORMATTING_PARTS.DECIMAL,
  value: char
});
const buildCurrencyPart = currency => ({
  type: FORMATTING_PARTS.CURRENCY,
  value: currency
});
const buildFractionPart = fraction => ({
  type: FORMATTING_PARTS.FRACTION,
  value: fraction
});
/**
 * Take a formatted string of number or currency and returns it split into an array,
 * almost the same as the non-stable Intl method - formatToParts.
 * We are making 2 iterations (one for the left/integer side and one for the right/fractions side)
 * and then we are concatenating those 2 arrays.
 * Example:
 * 'US$1,234.5' -> [
 *      { type: 'currency', value: 'US$'},
 *      { type: 'integer', value: '1,234'},
 *      { type: 'decimal', value: '.'},
 *      { type: 'fraction', value: '5'},
 * ]
 * @param {Object} options - should include whatever is needed by those 2 iterations
 * @returns {Array}
 */
const toParts = options => [...toPartsInteger(options), ...toPartsFraction(options)];
/**
 * Iterates over the formattedString and splits it into an array of different types.
 * This iteration ends when we get the integer type
 * @param {Object} options
 * @returns {Array} - Array of parts, starting from the left side (beginning) of the string until the integer.
 */
const toPartsInteger = options => {
  const {
    localizationContext,
    parsedOptions,
    formattingLocale,
    currencyCode,
    formattedString,
    formattedNumber
  } = options;
  const parts = [];
  let i = 0;
  while (i < formattedString.length) {
    const char = formattedString.charAt(i);
    if (isNumeric(char)) {
      /*
      If the char is numeric it means that this is the last char i need to iterate over.
      This is because the last part of the 'integer' side of the formatted string is the integer
      When we get to the first numeric character we are building the integer using
      the formattedNumber and Intl.
       */
      const integer = Math.abs(parseInt(formattedNumber, 10));
      const integerOptions = {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      };
      parts.push(buildIntegerPart(new Intl.NumberFormat(formattingLocale, integerOptions).format(integer)));
      break;
    } else if (isSpace(char)) {
      parts.push(buildLiteralPart(char));
    } else if (isPercentage(char)) {
      parts.push(buildPercentagePart(char));
    } else if (isMinusSign(char)) {
      parts.push(buildMinusSignPart(char));
    } else {
      /*
      We get here if the character is not numeric, not a white space, not a percentage and not a minus.
      This means that it must be the currency symbol / code.
      In this case we are using a util to understand what is the code / symbol we should add
      (instead of using the formattedString itself, because it's impossible due to spaces etc)
      Then we moving our iterator according to the length of the currency symbol we added so we
      keep iterating over the formattedString
       */
      const currencySymbol = parsedOptions.currencyDisplay === CURRENCY_STYLES.CODE ? currencyCode : getCurrencySymbol({
        localizationContext,
        currencyCode,
        formattingLocale
      });
      parts.push(buildCurrencyPart(currencySymbol));
      i = i + currencySymbol.length;
      continue;
    }
    i++;
  }
  return parts;
};
/**
 * Iterates over the formattedString and splits it into an array of different types.
 * This iteration ends when we get to the fraction type (starts from the end)
 * @param {Object} options
 * @returns {Array} - Array of parts, starting from the right side (end) of the string until the fraction digits.
 */
const toPartsFraction = options => {
  const {
    localizationContext,
    formattingLocale,
    currencyCode,
    formattedString,
    parsedOptions
  } = options;
  const parts = [];
  const decimalValue = 1.1.toLocaleString(formattingLocale).substring(1, 2);
  const hasFractionDigits = formattedString.indexOf(decimalValue) !== -1;
  let i = formattedString.length - 1;
  while (i >= 0) {
    const char = formattedString.charAt(i);
    if (isNumeric(char)) {
      /*
      If the char is numeric it means that this is the last char i need to iterate over.
      If the origin number has no fraction digits it means we get to the integer so we should break,
      because it is handled by the other method (toPartsInteger).
      If the origin number has fraction digits we should add those fraction digits to the parts array.
      We should break because this is the last part of the 'fraction' side of the formatted string
      When we get to the first numeric character we are building the fraction number using an internal loop
      until we getting a char that is not numeric.
      Then we are adding manually the decimal sign (we cannot continue iterating because we will end up
      with a non-numeric char and in the ELSE (treated as currency)
       */
      if (hasFractionDigits) {
        let fraction = char;
        let nextIndex = i - 1;
        let nextChar = formattedString.charAt(nextIndex);
        while (isNumeric(nextChar)) {
          fraction = "".concat(nextChar).concat(fraction);
          nextIndex--;
          nextChar = formattedString.charAt(nextIndex);
        }
        parts.unshift(buildFractionPart(fraction));
        parts.unshift(buildDecimalPart(decimalValue));
      }
      break;
    } else if (isSpace(char)) {
      parts.unshift(buildLiteralPart(char));
    } else if (isPercentage(char)) {
      parts.unshift(buildPercentagePart(char));
    } else if (isMinusSign(char)) {
      parts.unshift(buildMinusSignPart(char));
    } else {
      /*
      We get here if the character is not numeric, not a white space, not a percentage and not a minus.
      This means that it must be the currency symbol / code.
      In this case we are using a util to understand what is the code / symbol we should add
      (instead of using the formattedString itself, because it's impossible due to spaces etc)
      Then we moving our iterator according to the length of the currency symbol we added so we
      keep iterating over the formattedString
       */
      const currencySymbol = parsedOptions.currencyDisplay === CURRENCY_STYLES.CODE ? currencyCode : getCurrencySymbol({
        localizationContext,
        currencyCode,
        formattingLocale
      });
      parts.unshift(buildCurrencyPart(currencySymbol));
      i = i - currencySymbol.length;
      continue;
    }
    i--;
  }
  return parts;
};

;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/constants.js
const ERROR_MESSAGES = {
  INTL_IS_NOT_DEFINED: 'Intl is not defined'
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/number/constants.js
const NUMBER_STYLES = {
  DECIMAL: 'decimal',
  PERCENT: 'percent'
};
const NUMBER_FORMATTING_OPTIONS = {
  style: {
    validator: value => Object.values(NUMBER_STYLES).includes(value),
    validatorFallbackValue: NUMBER_STYLES.DECIMAL,
    defaultValue: NUMBER_STYLES.DECIMAL
  },
  minimumFractionDigits: {},
  maximumFractionDigits: {}
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/number/index.js





const NUMBER_PARTS = {
  INTEGER: 'integer',
  DECIMAL: 'decimal',
  FRACTION: 'fraction',
  MINUS_SIGN: 'minusSign',
  LITERAL: 'literal',
  PERCENTAGE: 'percentage'
};
/**
 * Format a number.
 * Use this to format numbers, either decimal (i.e '3', '5.3') or percentages (i.e '40%', '98.5%').
 * Return the number as a string, formatted to user formatting locale.
 * @param {Object} localizationContext - the localization context that is being injected
 * dynamically according to the run time env by one of the wrappers - withBrowserContext / withMainContext / withModuleContext
 * @param {number} value Number to be formatted.
 * @param {Object} [options={}] Optional formatting configurations.
 * @returns {string|number} Formatted value string.
 */
const numberFormat = _ref => {
  let {
    localizationContext,
    value,
    options = {}
  } = _ref;
  const fallbackValue = (options.fallbackValue || value).toString();
  try {
    if (Intl === undefined) {
      emitter/* default */.A.warn(ERROR_MESSAGES.INTL_IS_NOT_DEFINED);
      return fallbackValue;
    }
    if (!localizationContext || Object.keys(localizationContext).length === 0) {
      return fallbackValue;
    }
    const {
      asNumber,
      asParts
    } = options;
    const formattingLocale = options.formattingLocale || localizationContext.formattingLocale;
    const parsedOptions = parseOptions(options);
    const formattedString = new Intl.NumberFormat(formattingLocale, parsedOptions).format(value);
    if (asNumber || asParts) {
      const formattedNumber = parseFloat(formattedString.replace(/,/g, '.'));
      return asNumber ? formattedNumber : toParts({
        localizationContext,
        formattingLocale,
        formattedString,
        formattedNumber
      });
    }
    return formattedString;
  } catch (e) {
    emitter/* default */.A.error(e, {
      value,
      options,
      formatter: 'numberFormat'
    });
    return fallbackValue;
  }
};
/**
 * Parse formatter options.
 * This method validates the properties in the options object and overrides properties for Fiverr custom formatting rules.
 * @param {Object} options Optional formatting configurations.
 * @returns {Object} Validated formatting configurations.
 */
const parseOptions = options => {
  const validatedOptions = validateOptions(NUMBER_FORMATTING_OPTIONS, options);
  if (options.noFractionDigits) {
    validatedOptions.minimumFractionDigits = 0;
    validatedOptions.maximumFractionDigits = 0;
  }
  if (options.asNumber || options.asParts) {
    validatedOptions.useGrouping = false;
  }
  return validatedOptions;
};

;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/currency/index.js






const CURRENCY_PARTS = {
  INTEGER: 'integer',
  DECIMAL: 'decimal',
  FRACTION: 'fraction',
  MINUS_SIGN: 'minusSign',
  LITERAL: 'literal',
  CURRENCY: 'currency'
};
/**
 * Format a currency.
 * Use this to format currencies.
 * Return the number as a string, formatted to user formatting locale.
 * @param {Object} localizationContext - the localization context that is being injected
 * dynamically according to the run time env by one of the wrappers - withBrowserContext / withMainContext / withModuleContext
 * @param {number} value Amount to be formatted.
 * @param {string} currencyCode Currency code.
 * @param {Object} [options={}] Optional formatting configurations.
 * @returns {string|number} Formatted value string.
 */
const currencyFormat = _ref => {
  let {
    localizationContext,
    value,
    currencyCode,
    options = {}
  } = _ref;
  const fallbackValue = options.fallbackValue || "".concat(value, " ").concat(currencyCode);
  try {
    if (Intl === undefined) {
      emitter/* default */.A.warn(ERROR_MESSAGES.INTL_IS_NOT_DEFINED);
      return fallbackValue;
    }
    if (!localizationContext || Object.keys(localizationContext).length === 0) {
      return fallbackValue;
    }
    const {
      asNumber,
      asParts
    } = options;
    const formattingLocale = options.formattingLocale || localizationContext.formattingLocale;
    const parsedOptions = currency_parseOptions(value, currencyCode, options);
    const formattedString = new Intl.NumberFormat(formattingLocale, parsedOptions).format(value);
    const formattedStringOverriddenCurrency = overrideCurrencySymbol({
      formattedString,
      parsedOptions,
      currencyCode
    });
    if (asNumber || asParts) {
      const formattedNumber = parseFloat(formattedStringOverriddenCurrency.replace(/[^0-9,.-]/gi, '').replace(/,/g, '.'));
      return asNumber ? formattedNumber : toParts({
        localizationContext,
        parsedOptions,
        formattingLocale,
        currencyCode,
        formattedString: formattedStringOverriddenCurrency,
        formattedNumber
      });
    }
    return formattedStringOverriddenCurrency;
  } catch (error) {
    emitter/* default */.A.error(error, {
      value,
      options,
      formatter: 'currencyFormat'
    });
    return fallbackValue;
  }
};
/**
 * Parse formatter options.
 * This method validates the properties in the options object and overrides properties for Fiverr custom formatting rules.
 * @param {Object} options Optional formatting configurations.
 * @returns {Object} Validated formatting configurations.
 */
const currency_parseOptions = (value, currencyCode, options) => {
  const validatedOptions = validateOptions(CURRENCY_FORMATTING_OPTIONS, options);
  if (value % 1 === 0 && !Object.prototype.hasOwnProperty.call(validatedOptions, 'maximumFractionDigits') && !Object.prototype.hasOwnProperty.call(validatedOptions, 'minimumFractionDigits')) {
    validatedOptions.maximumFractionDigits = 0;
    validatedOptions.minimumFractionDigits = 0;
  }
  if (options.noFractionDigits) {
    validatedOptions.minimumFractionDigits = 0;
    validatedOptions.maximumFractionDigits = 0;
  }
  validatedOptions.style = 'currency';
  validatedOptions.currency = currencyCode;
  if (options.asNumber || options.asParts) {
    validatedOptions.useGrouping = false;
  }
  return validatedOptions;
};

;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/shared/constants.js
/**
 * The default localization context to use when context does not exists over the current runtime
 * @type {Object}
 */const DEFAULT_LOCALIZATION_CONTEXT = {
  browserLanguage: '',
  countryCode: '',
  currency: '',
  experienceLocale: 'en-US',
  formattingLocale: 'en-GB',
  shouldFormat: true
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/dateTime/constants.js
var constants = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/dateTime/constants.js");
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/dateTime/index.js





/**
 * Format a date / time.
 * Use this to format dates and times.
 * Return the date / time as a string, formatted to user formatting locale.
 * @param {Object} localizationContext - the localization context that is being injected
 * dynamically according to the run time env by one of the wrappers - withBrowserContext / withMainContext / withModuleContext
 * @param {Date | string} value date to be formatted.
 * @param {Object} [options={}] Optional formatting configurations.
 * @returns {string} Formatted value string.
 */
const dateTimeFormat = _ref => {
  let {
    localizationContext = {},
    value,
    options = {}
  } = _ref;
  const fallbackLocale = (localizationContext === null || localizationContext === void 0 ? void 0 : localizationContext.formattingLocale) || DEFAULT_LOCALIZATION_CONTEXT.formattingLocale;
  const fallbackValue = options.fallbackValue || new Intl.DateTimeFormat(fallbackLocale, {
    year: constants/* DATETIME_ELEMENT_STYLES */.Y.NUMERIC,
    month: constants/* DATETIME_ELEMENT_STYLES */.Y.SHORT,
    day: constants/* DATETIME_ELEMENT_STYLES */.Y.TWO_DIGIT,
    hour: constants/* DATETIME_ELEMENT_STYLES */.Y.TWO_DIGIT,
    minute: constants/* DATETIME_ELEMENT_STYLES */.Y.TWO_DIGIT
  }).format(value);
  try {
    if (Intl === undefined) {
      emitter/* default */.A.warn(ERROR_MESSAGES.INTL_IS_NOT_DEFINED);
      return fallbackValue;
    }
    if (!localizationContext || Object.keys(localizationContext).length === 0) {
      return fallbackValue;
    }
    const formattingLocale = options.formattingLocale || localizationContext.formattingLocale;
    const parsedOptions = dateTime_parseOptions(options);
    return new Intl.DateTimeFormat(formattingLocale, parsedOptions).format(value);
  } catch (e) {
    emitter/* default */.A.error(e, {
      value,
      options,
      formatter: 'dateTimeFormat'
    });
    return fallbackValue;
  }
};
/**
 * Parse formatter options.
 * This method validates the properties in the options object and overrides properties for Fiverr custom formatting rules.
 * @param {Object} options Optional formatting configurations.
 * @returns {Object} Validated formatting configurations.
 */
const dateTime_parseOptions = options => validateOptions(constants/* DATETIME_FORMATTING_OPTIONS */.P, options);

;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/shortLanguageCode/index.js
const shortLanguageCode_getShortLanguageCode = language => language.substr(0, 2);
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/supportedFiverrLocales/constants.js
const constants_SUPPORTED_FIVERR_LOCALES_MAP = {
  'de-DE': 'Deutsch',
  'en-US': 'English',
  es: 'Español',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'nl-NL': 'Nederlands',
  'pt-BR': 'Português'
};
const SUPPORTED_FIVERR_LANGUAGES = {
  EN: 'en',
  PT: 'pt',
  IT: 'it',
  ES: 'es',
  DE: 'de',
  NL: 'nl',
  FR: 'fr'
};
const constants_LOCALE_TO_SUBDOMAIN_MAP = {
  'en-US': 'www',
  'de-DE': 'de',
  es: 'es',
  'fr-FR': 'fr',
  'pt-BR': 'br',
  'it-IT': 'it',
  'nl-NL': 'nl'
};
const DEFAULT_FIVERR_LOCALE = 'en-US';
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/supportedFiverrLocales/index.js


const supportedFiverrLocales_DEFAULT_FIVERR_LOCALE = DEFAULT_FIVERR_LOCALE;
const supportedFiverrLocales_SUPPORTED_FIVERR_LOCALES = Object.keys(constants_SUPPORTED_FIVERR_LOCALES_MAP);
const DEFAULT_FIVERR_LANGUAGE = shortLanguageCode_getShortLanguageCode(supportedFiverrLocales_DEFAULT_FIVERR_LOCALE);
const supportedFiverrLocales_SUPPORTED_FIVERR_LANGUAGES = (/* unused pure expression or super */ null && (SUPPORTED_FIVERR_LANGUAGES_CONST));

/**
 * Build a map of the supported Fiverr locales in the form of:
 * {
 *     EN_US: 'en-US',
 *     DE_DE: 'de-DE',
 *     ES: 'es,
 *     ...
 * }
 * So consumers can check for specific locale in their code.
 * @returns {{localeKey: String}} - the native name of the locale
 */
const localesKeys = {};
Object.keys(constants_SUPPORTED_FIVERR_LOCALES_MAP).forEach(locale => {
  const localeKey = locale.toUpperCase().replace(/-/g, '_');
  localesKeys[localeKey] = locale;
});
const SUPPORTED_FIVERR_LOCALES_KEYS = (/* unused pure expression or super */ null && (localesKeys));
/**
 * Check if Fiverr supports this locale.
 * Meaning: we have a Fiverr experience in this locale (UI language).
 * @param locale {string} - check for existence as-is, no trimming, etc.
 * @returns {boolean} - the locale is supported or not
 */
const isSupportedFiverrLocale = locale => !!SUPPORTED_FIVERR_LOCALES_MAP[locale];
/**
 * Returns the native name of the locale.
 * @param locale {string} - check for existence as-is, no trimming, etc.
 * @returns {string} - the native name of the locale
 */
const getFiverrLocaleNativeName = locale => SUPPORTED_FIVERR_LOCALES_MAP[locale] || locale;
const MAIN_SUBDOMAIN = constants_LOCALE_TO_SUBDOMAIN_MAP[supportedFiverrLocales_DEFAULT_FIVERR_LOCALE];
const AQUARIUM_PREFIX = 'aq-';
const subdomainMatchGroup = Object.values(constants_LOCALE_TO_SUBDOMAIN_MAP).join('|');
const IS_FIVERR_COM_REGEX = new RegExp("^((".concat(subdomainMatchGroup, ")\\.){1,2}(dev\\.){0,1}fiverr.com$"));
/**
 * Add target subdomain to hostname
 *
 * @param {string} hostname
 * @param {string} targetSubdomain
 * @returns {string} local site hostname
 */
const replaceLocaleSubdomain = (hostname, targetSubdomain) => {
  const subdomains = hostname.split('.');
  const currentSubdomain = Object.values(LOCALE_TO_SUBDOMAIN_MAP).find(subdomain => subdomains.includes(subdomain));
  const currentSubdomainIndex = subdomains.indexOf(currentSubdomain);
  if (isSameSubdomain(currentSubdomain, targetSubdomain)) {
    return hostname;
  }
  // target locale is English and we're on a subsystem of Fiverr (e.g Fiverr Business, Aquarium etc)
  if (targetSubdomain === MAIN_SUBDOMAIN && !IS_FIVERR_COM_REGEX.test(hostname)) {
    // only remove the current subdomain
    subdomains.splice(currentSubdomainIndex, 1);
  } else if (subdomains[0].startsWith(AQUARIUM_PREFIX) && currentSubdomainIndex === -1) {
    // Aquarium (default locale)
    // inserting target subdomain after Aquarium id
    subdomains.splice(1, 0, targetSubdomain);
  } else if (currentSubdomainIndex !== -1) {
    // replacing existing subdomain
    subdomains.splice(currentSubdomainIndex, 1, targetSubdomain);
  } else {
    // might happen on Fiverr Business (default locale)
    // appending target subdomain at the beginning of the hostname
    subdomains.splice(0, 0, targetSubdomain);
  }
  return subdomains.join('.');
};
/**
 * Checks if `current` and `target` subdomains point to the same local site.
 * Usually, we want both of them to be equal by value, but on Aquarium or Fiverr Business
 * or other Fiverr subsystems, there's on `www` when browsing the English site, so in that
 * case, `taret` will be `www` but `current` will be empty.
 *
 * @param {string} current current subdomain
 * @param {string} target target subdomain
 * @returns {boolean} whether both subdomains point to the same local site.
 */
const isSameSubdomain = (current, target) => current === target || target === MAIN_SUBDOMAIN && !current;
/**
 * Convert locale to its matching subdomain (e.g "en-US" -> "www", "pt-BR" -> "br").
 * Fallback is the main subdomain which is "www".
 * @param {string} locale
 * @returns the matching subdomain
 */
const getLocaleSubdomain = locale => LOCALE_TO_SUBDOMAIN_MAP[locale] || MAIN_SUBDOMAIN;
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/supportedFormattingLocales/constants.js
const constants_SUPPORTED_FORMATTING_LOCALES_MAP = {
  'en-US': 'English (United States)',
  'en-GB': 'English (United Kingdom)',
  'en-AU': 'English (Australia)',
  'en-CA': 'English (Canada)',
  'de-DE': 'Deutsch (Deutschland)',
  'de-AT': 'Deutsch (Österreich)',
  'es-ES': 'Español (España)',
  'es-MX': 'Español (México)',
  'fr-FR': 'Français (France)',
  'fr-CA': 'Français (Canada)',
  'it-IT': 'Italiano (Italia)',
  'nl-NL': 'Nederlands (Nederland)',
  'pt-BR': 'Português (Brasil)',
  'pt-PT': 'Português (Portugal)'
};
const constants_FORMATTING_LOCALE_FALLBACK_MAP = {
  'es-US': 'es-MX',
  'es-AR': 'es-MX',
  'es-BO': 'es-MX',
  'es-CL': 'es-MX',
  'es-CO': 'es-MX',
  'es-CR': 'es-MX',
  'es-DO': 'es-MX',
  'es-EC': 'es-MX',
  'es-GT': 'es-MX',
  'es-HN': 'es-MX',
  'es-NI': 'es-MX',
  'es-PA': 'es-MX',
  'es-PE': 'es-MX',
  'es-PR': 'es-MX',
  'es-PY': 'es-MX',
  'es-SV': 'es-MX',
  'es-UY': 'es-MX',
  'es-VE': 'es-MX',
  es: 'es-ES'
};
const DEFAULT_FORMATTING_LOCALE = 'en-GB';
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/supportedFormattingLocales/index.js



const supportedFormattingLocales_DEFAULT_FORMATTING_LOCALE = DEFAULT_FORMATTING_LOCALE;
const SUPPORTED_FORMATTING_LOCALES = Object.keys(constants_SUPPORTED_FORMATTING_LOCALES_MAP);
const DEFAULT_FORMATTING_LANGUAGE = shortLanguageCode_getShortLanguageCode(supportedFormattingLocales_DEFAULT_FORMATTING_LOCALE);
/**
 * Build a map of the supported Formatting locales in the form of:
 * {
 *     EN_US: 'en-US',
 *     DE_DE: 'de-DE',
 *     ES: 'es,
 *     ...
 * }
 * So consumers can check for specific formatting locale in their code.
 * @returns {{localeKey: String}} - the native name of the formatting locale
 */
const supportedFormattingLocales_localesKeys = {};
Object.keys(constants_SUPPORTED_FORMATTING_LOCALES_MAP).forEach(locale => {
  const localeKey = locale.toUpperCase().replace(/-/g, '_');
  supportedFormattingLocales_localesKeys[localeKey] = locale;
});
const SUPPORTED_FORMATTING_LOCALES_KEYS = (/* unused pure expression or super */ null && (supportedFormattingLocales_localesKeys));
/**
 * Calculate the formatting locale
 *
 * Current logic (prioritized):
 * - If browserLanguage = fiverrLanguage (fiverrLocale prefix) AND browserLocale is supported formatting locale -
 *      return browserLocale as formattingLocale.
 * - If fiverrLanguage + countryCode is supported formatting locale -
 *      return fiverrLanguage + countryCode as formatting locale.
 * - If fiverrLanguage = 'en' -
 *      return DEFAULT_FORMATTING_LOCALE as formatting locale.
 * - If fiverrLanguage + countryCode exists in FORMATTING_LOCALE_FALLBACK_MAP -
 *      return formatting locale from mapping.
 * - If fiverrLocale exists in FORMATTING_LOCALE_FALLBACK_MAP -
 *      return formatting locale from mapping.
 * - If none of the above -
 *      return fiverrLocale as formattingLocale, if not supplied - return the default formatting locale
 *
 * @param {FormattingLocaleParams} {{ locale: String, browserLanguage: String, countryCode: String }} -
 *      The locale, country code and the browser language
 * @returns {string} - the calculated formatting locale (e.g 'en-GB' / 'es-MX')
 */
const calculateFormattingLocale = _ref => {
  let {
    locale,
    browserLanguage,
    countryCode
  } = _ref;
  // Fix Safari browser issue
  // @see https://bugs.webkit.org/show_bug.cgi?id=163096
  browserLanguage = normalizeBrowserLanguage(browserLanguage);
  const browserLanguageShort = browserLanguage && getShortLanguageCode(browserLanguage);
  const fiverrLanguageShort = locale && getShortLanguageCode(locale);
  if (browserLanguageShort === fiverrLanguageShort && isSupportedFormattingLocale(browserLanguage)) {
    return browserLanguage;
  }
  const fiverrLangWithCountryCode = "".concat(fiverrLanguageShort, "-").concat(countryCode);
  if (isSupportedFormattingLocale(fiverrLangWithCountryCode)) {
    return fiverrLangWithCountryCode;
  }
  if (fiverrLanguageShort === DEFAULT_FORMATTING_LANGUAGE) {
    return supportedFormattingLocales_DEFAULT_FORMATTING_LOCALE;
  }
  return FORMATTING_LOCALE_FALLBACK_MAP[fiverrLangWithCountryCode] || FORMATTING_LOCALE_FALLBACK_MAP[locale] || locale || supportedFormattingLocales_DEFAULT_FORMATTING_LOCALE;
};
/**
 * Normalize the browser language string (i.e uppercase the country code)
 * @param browserLanguage {string} - the browser language of the user
 * @returns {string} - the normalized form of the browser language
 */
const normalizeBrowserLanguage = browserLanguage => browserLanguage && browserLanguage.replace(/-(.{2})/, country => country.toUpperCase());
/**
 * Check if a locale is a valid formatting locale.
 * @param locale {string} - check for existence as-is, no trimming, etc.
 * @returns {boolean} - the locale is supported or not
 */
const isSupportedFormattingLocale = locale => !!locale && !!SUPPORTED_FORMATTING_LOCALES_MAP[locale];
/**
 * Returns the native name of the formatting locale.
 * @param locale {string} - check for existence as-is, no trimming, etc.
 * @returns {string} - the native name of the formatting locale
 */
const getFormattingLocaleNativeName = locale => SUPPORTED_FORMATTING_LOCALES_MAP[locale] || locale;
/**
 * Get a formatting locales corresponding Fiverr locale.
 * @param formattingLocale {string} - check for existence as-is, no trimming, etc.
 * @returns {string} - the corresponding Fiverr locale.
 */
const getFiverrLocaleByFormattingLocale = formattingLocale => supportedFiverrLocales_SUPPORTED_FIVERR_LOCALES.find(fiverrLocale => shortLanguageCode_getShortLanguageCode(fiverrLocale) === shortLanguageCode_getShortLanguageCode(formattingLocale));
/**
 * Get a Fiverr locale with corresponding language code.
 * @param languageCode {string} - language code. Examples: de, fr, it
 * @returns {string|undefined} - the corresponding Fiverr locale.
 */
const getFiverrLocaleByLanguageCode = languageCode => SUPPORTED_FIVERR_LOCALES.find(fiverrLocale => getShortLanguageCode(fiverrLocale) === languageCode);
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/fileSize/constants.js
const FILE_SIZE_FORMATTING_OPTIONS = {
  maximumFractionDigits: {
    defaultValue: 2
  }
};
const K = 1024;
const FILE_SIZE_TEMPLATES = [fileSize => "".concat(fileSize, " byte"), fileSize => "".concat(fileSize, " kB"), fileSize => "".concat(fileSize, " MB"), fileSize => "".concat(fileSize, " GB"), fileSize => "".concat(fileSize, " TB"), fileSize => "".concat(fileSize, " PB"), fileSize => "".concat(fileSize, " EB"), fileSize => "".concat(fileSize, " ZB"), fileSize => "".concat(fileSize, " YB")];
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/fileSize/index.js





/**
 * Format a file size.
 * Returns the file size as a string, formatted and localized.
 * Based on the implementation from https://stackoverflow.com/question s/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript.
 * @param {Object} localizationContext - the localization context that is being injected
 * dynamically according to the run time env by one of the wrappers - withBrowserContext / withMainContext / withModuleContext
 * @param {number} bytes The file's size in bytes.
 * @param {Object} [options={}] Optional formatting configurations.
 * @returns {string} Formatted value string.
 */
const fileSizeFormat = _ref => {
  let {
    localizationContext,
    bytes,
    options = {}
  } = _ref;
  const fallbackValue = options.fallbackValue || FILE_SIZE_TEMPLATES[0](bytes);
  try {
    if (!localizationContext || Object.keys(localizationContext).length === 0) {
      return fallbackValue;
    }
    const formattingLocale = options.formattingLocale || localizationContext.formattingLocale;
    const parsedOptions = fileSize_parseOptions(options);
    const i = Math.max(0, Math.floor(Math.log(bytes) / Math.log(K)));
    const fileSize = numberFormat({
      localizationContext,
      value: bytes / Math.pow(K, i),
      options: {
        formattingLocale,
        maximumFractionDigits: parsedOptions.maximumFractionDigits,
        noFractionDigits: parsedOptions.noFractionDigits
      }
    });
    const fileSizeKey = "fileSizes.abbrv[".concat(i, "]");
    const locale = getFiverrLocaleByFormattingLocale(formattingLocale);
    const isLocalizedKeyExists = i18n.has(fileSizeKey, {
      $scope: locale
    });
    if (typeof i18n === 'undefined' || !isNaN(i) && !isLocalizedKeyExists) {
      return FILE_SIZE_TEMPLATES[i](fileSize);
    }
    return i18n.t(fileSizeKey, {
      fileSize: fileSize,
      $scope: locale
    });
  } catch (e) {
    emitter/* default */.A.error(e, {
      bytes,
      options,
      formatter: 'fileSizeFormat'
    });
    return fallbackValue;
  }
};
/**
 * Parse formatter options.
 * This method validates the properties in the options object and overrides properties for Fiverr custom formatting rules.
 * @param {Object} options Optional formatting configurations.
 * @returns {Object} Validated formatting configurations.
 */
const fileSize_parseOptions = options => validateOptions(FILE_SIZE_FORMATTING_OPTIONS, options);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/withBrowserContext/constants.js
/**
 * The error message to be logged when trying to access `getLocalizationContext` api while browser context does not exist.
 * @type {String}
 */const LOCALIZATION_CONTEXT_DOES_NOT_EXIST = 'Browser localization context does not exist, please ensure the run time owner sets one on the window scope before using this API';
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/withBrowserContext/index.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





const errorLoggedKey = Symbol();
/**
 * Returns the current available localization context for browser run time environment.
 * @returns {Object} - localization context object
 */
const getLocalizationContext = () => {
  const {
    computedLocale
  } = (0,getContext/* default */.A)();
  let localizationContext;
  if (computedLocale) {
    localizationContext = {
      formattingLocale: computedLocale
    };
  } else {
    localizationContext = (0,lodash.get)(window, 'initialData.LocalizationContext');
  }
  if (!localizationContext) {
    // We would like to log error in the browser only once per page view
    if (window && !window[errorLoggedKey]) {
      window[errorLoggedKey] = true;
      emitter/* default */.A.error({
        message: LOCALIZATION_CONTEXT_DOES_NOT_EXIST
      });
    }
    return DEFAULT_LOCALIZATION_CONTEXT;
  }
  return localizationContext;
};
/**
 * Wraps a function and injects dynamically the localization context (browser run time)
 * as the first parameter. Based on FiverrContext or LocalizationContext
 * @param baseFunc {Function} - the function to wrap
 * @returns {Function} - localizationContext wrapped function
 */
const withBrowserContext = baseFunc => args => {
  const localizationContext = getLocalizationContext();
  return baseFunc(_objectSpread({
    localizationContext
  }, args));
};
;// ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js






const browser_numberFormat = withBrowserContext(numberFormat);
const browser_currencyFormat = withBrowserContext(currencyFormat);
const browser_dateTimeFormat = withBrowserContext(dateTimeFormat);
const browser_fileSizeFormat = withBrowserContext(fileSizeFormat);
const browser_getCurrencySymbol = withBrowserContext(getCurrencySymbol);











/***/ }),

/***/ "../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/utils/formatters/dateTime/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ DATETIME_FORMATTING_OPTIONS),
/* harmony export */   Y: () => (/* binding */ DATETIME_ELEMENT_STYLES)
/* harmony export */ });
const DATETIME_ELEMENT_STYLES = {
  NUMERIC: 'numeric',
  TWO_DIGIT: '2-digit',
  LONG: 'long',
  SHORT: 'short'
};
const DATETIME_FORMATTING_OPTIONS = {
  year: {},
  month: {},
  day: {},
  hour: {},
  minute: {},
  second: {},
  dateStyle: {},
  hour12: {},
  weekday: {}
};

/***/ })

}]);
//# sourceMappingURL=3631.fd11b688.iframe.bundle.js.map