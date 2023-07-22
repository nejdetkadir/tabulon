import React from 'react';
import { View as RNView, Text, Pressable } from 'react-native';

import { useLocale } from '@app/hooks';

type WaitingRoundViewPropTypes = {
  currentRound: RoundType;
};

type WaitingRoundBottomBarPropTypes = {
  startFistRound: () => void;
};

const View = ({ currentRound }: WaitingRoundViewPropTypes) => {
  const SCOPE_OPTIONS = {
    scope: 'components.Game.WaitingRound.View',
  };
  const { t } = useLocale();

  return (
    <RNView
      style={{ gap: 10 }}
      className="bg-orange-500 border border-white p-6 rounded-xl flex flex-col items-center"
    >
      <Text className="text-white font-bold uppercase">
        {t('labels.startingTeam', SCOPE_OPTIONS)}
      </Text>
      <Text className="text-white font-semibold text-4xl uppercase">{currentRound.team.name}</Text>
    </RNView>
  );
};

const BottomBar = ({ startFistRound }: WaitingRoundBottomBarPropTypes) => {
  const SCOPE_OPTIONS = {
    scope: 'components.Game.WaitingRound.BottomBar',
  };
  const { t } = useLocale();

  return (
    <RNView className="flex flex-col h-32 border-t border-t-4 absolute bottom-0 w-full right-0">
      <Pressable
        className="flex-1 bg-green-600 active:bg-green-700 justify-center items-center"
        onPress={() => startFistRound()}
      >
        <Text className="text-white font-bold text-center uppercase">
          {t('actions.ready', SCOPE_OPTIONS)}
        </Text>
      </Pressable>
    </RNView>
  );
};

export default { View, BottomBar };
