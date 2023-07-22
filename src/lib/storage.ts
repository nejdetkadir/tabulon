import { MMKV } from 'react-native-mmkv';

import { STORAGE_KEYS } from '@app/constants';

type SettingsType = {
  teamCount: number;
  roundDuration: number;
  passCount: number;
  roundCount: number;
};

const storage = new MMKV({
  id: 'tabulon',
});

function setSettings(settings: SettingsType): void {
  storage.set(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

function getSettings(): SettingsType | undefined {
  const settings = storage.getString(STORAGE_KEYS.SETTINGS);

  if (!settings) {
    return;
  }

  return JSON.parse(settings);
}

function getLocale(): string | undefined {
  return storage.getString(STORAGE_KEYS.LANGUAGE);
}

function setLocale(language: string): void {
  storage.set(STORAGE_KEYS.LANGUAGE, language);
}

export default {
  setSettings,
  getSettings,
  getLocale,
  setLocale,
};
