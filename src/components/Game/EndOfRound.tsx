import React from 'react';
import { View as RNView, Text, Pressable } from 'react-native';

import { useLocale } from '@app/hooks';

type EndOfRoundViewPropTypes = {
  nextRoundTeam: TeamType;
};

type EndOfRoundBottomBarPropTypes = {
  startRound: () => void;
};

const View = ({ nextRoundTeam }: EndOfRoundViewPropTypes) => {
  const SCOPE_OPTIONS = {
    scope: 'components.Game.EndOfRound.View',
  };
  const { t } = useLocale();

  return (
    <RNView
      style={{ gap: 10 }}
      className="bg-orange-500 border border-white p-6 rounded-xl flex flex-col items-center"
    >
      <Text className="text-white font-bold uppercase">{t('labels.nextTeam', SCOPE_OPTIONS)}</Text>
      <Text className="text-white font-semibold text-4xl uppercase">{nextRoundTeam.name}</Text>
    </RNView>
  );
};

const BottomBar = ({ startRound }: EndOfRoundBottomBarPropTypes) => {
  const SCOPE_OPTIONS = {
    scope: 'components.Game.EndOfRound.BottomBar',
  };
  const { t } = useLocale();

  return (
    <RNView className="flex flex-col h-32 border-t border-t-4 absolute bottom-0 w-full right-0">
      <Pressable
        className="flex-1 bg-green-600 active:bg-green-700 justify-center items-center"
        onPress={() => startRound()}
      >
        <Text className="text-white font-bold text-center uppercase">
          {t('actions.startRound', SCOPE_OPTIONS)}
        </Text>
      </Pressable>
    </RNView>
  );
};

export default { View, BottomBar };
