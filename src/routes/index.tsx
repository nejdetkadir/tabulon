import React, { memo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@app/screens';
import { ROUTES } from '@app/constants';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default memo(Routes);
