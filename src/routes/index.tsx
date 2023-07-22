import React, { memo } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, GameScreen } from '@app/screens';
import { ROUTES } from '@app/constants';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTES.HOME}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTES.GAME}
        component={GameScreen}
      />
    </Stack.Navigator>
  );
};

export default memo(Routes);
