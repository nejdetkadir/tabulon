import React, { createContext, useState, useContext } from 'react';

import { I18n } from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import lodash from 'lodash';

import type { Locale } from 'react-native-localize';
import type { TranslateOptions } from 'i18n-js';

import { LANGUAGES } from '@app/constants';

type ReturnTypes = {
  t: (scope: string, options?: { [key: string]: string | number }) => string;
  locale: string;
  changeLocale: (localeParam: string) => void;
  languageTag: string;
};

const DEFAULT_LANGUAGE_CODE = LANGUAGES.TURKISH;
const DEFAULT_LANGUAGE_TAG = 'tr-TR';

const LocaleContext = createContext({} as ReturnTypes);
const translationGetters = {
  [LANGUAGES.ENGLISH]: require('../assets/locales/en.json'),
  [LANGUAGES.TURKISH]: require('../assets/locales/tr.json'),
};

const i18n = new I18n(translationGetters);
const deviceLocale = lodash.first(RNLocalize.getLocales()) as Locale;

function getDefaultLocale() {
  const keys = Object.keys(translationGetters);

  if (!deviceLocale?.languageCode) {
    return DEFAULT_LANGUAGE_CODE;
  }

  if (keys.includes(deviceLocale.languageCode)) {
    return deviceLocale?.languageCode;
  }

  return DEFAULT_LANGUAGE_CODE;
}

const defaultLocale = getDefaultLocale();

export const LocaleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<string>(defaultLocale);

  i18n.locale = locale;

  function changeLocale(localeParam: string) {
    setLocale(localeParam);
  }

  function t(scope: string, options?: TranslateOptions) {
    return i18n.t(scope, options);
  }

  return (
    <LocaleContext.Provider
      value={{
        t: t,
        locale,
        changeLocale,
        languageTag: deviceLocale?.languageTag || DEFAULT_LANGUAGE_TAG,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default function useLocale(): ReturnTypes {
  const context = useContext(LocaleContext);

  return context;
}
