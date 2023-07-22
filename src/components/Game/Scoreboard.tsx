import React from 'react';
import { View as RNView, Text, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useLocale } from '@app/hooks';
import { ROUTES } from '@app/constants';

type ScoreboardViewPropTypes = {
  teams: TeamType[];
};

const View = ({ teams }: ScoreboardViewPropTypes) => {
  const SCOPE_OPTIONS = {
    scope: 'components.Game.Scoreboard.View',
  };
  const { t } = useLocale();
  const navigation = useNavigation();

  return (
    <>
      <Text className="text-white font-bold uppercase text-3xl">
        {t('labels.scoreboard', SCOPE_OPTIONS)}
      </Text>
      <RNView
        style={{ gap: 10 }}
        className="bg-orange-500 border border-white p-6 rounded-xl flex flex-col items-center"
      >
        {teams.map((team) => (
          <RNView key={team.id}>
            <Text className="text-white font-bold text-center uppercase text-xl">
              {team.name}{' '}
              {t('labels.score', {
                ...SCOPE_OPTIONS,
                score: team.totalScore,
              })}
            </Text>
          </RNView>
        ))}
      </RNView>

      <RNView className="w-1/2">
        <Pressable
          className="bg-green-500 p-4 rounded-full active:bg-green-600 shadow border border-white"
          onPress={() => navigation.navigate(ROUTES.HOME)}
        >
          <Text className="text-white font-bold text-center uppercase">
            {t('actions.finish', SCOPE_OPTIONS)}
          </Text>
        </Pressable>
      </RNView>
    </>
  );
};

export default { View };
