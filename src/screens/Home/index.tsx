import React from 'react';
import { View, Text, Pressable } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useBoolean } from 'usehooks-ts';

import { useLocale } from '@app/hooks';
import { SettingsModal } from '@app/components';
import { COLORS, ROUTES } from '@app/constants';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const SCOPE_OPTIONS = {
    scope: 'screens.Home',
  };
  const { t } = useLocale();
  const navigation = useNavigation();
  const { value: settingsModalIsVisible, setTrue, setFalse } = useBoolean(false);

  return (
    <LinearGradient
      colors={COLORS.GRADIENT_COLORS}
      style={{ gap: 50 }}
      className="flex-1 justify-center items-center"
    >
      <View style={{ gap: 15 }} className="w-2/5 flex-col">
        <Pressable
          className="bg-green-500 p-4 rounded-full active:bg-green-600 shadow border border-white"
          onPress={() => navigation.navigate(ROUTES.GAME)}
        >
          <Text className="text-white font-bold text-center uppercase">
            {t('actions.start', SCOPE_OPTIONS)}
          </Text>
        </Pressable>
        <Pressable
          className="bg-green-500 p-4 rounded-full active:bg-green-600 shadow border border-white"
          onPress={setTrue}
        >
          <Text className="text-white font-bold text-center uppercase">
            {t('actions.settings', SCOPE_OPTIONS)}
          </Text>
        </Pressable>
      </View>
      <SettingsModal isVisible={settingsModalIsVisible} onClose={setFalse} />
    </LinearGradient>
  );
};

export default Home;
