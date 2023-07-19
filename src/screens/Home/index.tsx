import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useLocale } from '@app/hooks';

const Home: React.FC = () => {
  const SCOPE_OPTIONS = {
    scope: 'screens.Home',
  };

  const navigation = useNavigation();
  const { t } = useLocale();

  useEffect(() => {
    navigation.setOptions({
      title: t('labels.title', SCOPE_OPTIONS),
    });
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{t('labels.title', SCOPE_OPTIONS)}</Text>
    </View>
  );
};

export default Home;
