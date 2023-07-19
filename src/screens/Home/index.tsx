import React from 'react';
import { View, Text, Pressable } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { useLocale } from '@app/hooks';

const Home: React.FC = () => {
  const SCOPE_OPTIONS = {
    scope: 'screens.Home',
  };
  const { t, changeLocale } = useLocale();

  return (
    <LinearGradient colors={['#818cf8', '#8b5cf6', '#9333ea']} style={{ gap: 50 }} className="flex-1 justify-center items-center">
      <View style={{ gap: 15 }} className="w-2/5 flex-col">
        <Pressable className="bg-green-500 p-4 rounded-full active:bg-green-600 shadow border border-white" onPress={() => {}}>
          <Text className="text-white font-bold text-center uppercase">{t('actions.start', SCOPE_OPTIONS)}</Text>
        </Pressable>
        <Pressable className="bg-green-500 p-4 rounded-full active:bg-green-600 shadow border border-white" onPress={() => {}}>
          <Text className="text-white font-bold text-center uppercase">{t('actions.settings', SCOPE_OPTIONS)}</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default Home;
