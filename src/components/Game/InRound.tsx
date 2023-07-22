import React from 'react';
import { View as RNView, Text, Pressable } from 'react-native';

import cn from 'classnames';

import { useLocale } from '@app/hooks';

type InRoundTopBarPropTypes = {
  currentRound: RoundType;
};

type InRoundViewPropTypes = {
  currentWord: WordType;
};

type InRoundBottomBarPropTypes = {
  passIsAvailable: boolean;
  correctAnswer: () => void;
  wrongAnswer: () => void;
  pass: () => void;
  currentRound: RoundType;
};

const TopBar = ({ currentRound }: InRoundTopBarPropTypes) => {
  const SCOPE_OPTIONS = {
    scope: 'components.Game.InRound.TopBar',
  };
  const { t } = useLocale();

  return (
    <RNView className="absolute top-20 w-full px-10">
      <RNView className="flex flex-row justify-between items-center">
        <Text className="uppercase font-bold text-white text-lg">
          {t('labels.score', {
            ...SCOPE_OPTIONS,
            score: currentRound.score,
          })}
        </Text>

        <RNView className="flex flex-row items-center">
          <Text className="uppercase font-bold text-white text-lg mr-1">
            {t('labels.time', SCOPE_OPTIONS)}
          </Text>
          <Text
            className={cn('font-bold text-white text-lg w-10', {
              'text-red-600 text-2xl': currentRound.remainingTime <= 5,
            })}
          >
            {currentRound.remainingTime}
          </Text>
        </RNView>
      </RNView>
    </RNView>
  );
};

const View = ({ currentWord }: InRoundViewPropTypes) => {
  return (
    <>
      <Text
        style={{
          fontSize: 40,
        }}
        className="w-full font-semibold text-white text-center px-5"
      >
        {currentWord.word}
      </Text>
      <RNView
        style={{ gap: 10 }}
        className="flex flex-col items-center justify-center border border-white bg-orange-500 w-2/3 rounded-3xl py-5"
      >
        {currentWord.forbiddenWords.map((fb, index) => (
          <Text key={index} className="font-bold text-white text-2xl">
            {fb}
          </Text>
        ))}
      </RNView>
    </>
  );
};

const BottomBar = ({
  passIsAvailable,
  correctAnswer,
  wrongAnswer,
  pass,
  currentRound,
}: InRoundBottomBarPropTypes) => {
  const SCOPE_OPTIONS = {
    scope: 'components.Game.InRound.BottomBar',
  };
  const { t } = useLocale();

  return (
    <RNView className="flex flex-row h-32 border-t border-t-4 absolute bottom-0 w-full right-0">
      <Pressable
        className="flex-1 bg-green-600 active:bg-green-700 justify-center items-center"
        onPress={() => correctAnswer()}
      >
        <Text className="text-white font-bold text-center uppercase">
          {t('actions.correctAnswer', SCOPE_OPTIONS)}
        </Text>
      </Pressable>
      <RNView className="w-1 border border-l-4" />
      <Pressable
        disabled={!passIsAvailable}
        className={cn('flex-1 bg-gray-600 active:bg-gray-700 justify-center items-center', {
          'bg-gray-500': !passIsAvailable,
        })}
        onPress={() => pass()}
      >
        <Text className="text-white font-bold text-center uppercase">
          {t('actions.pass', SCOPE_OPTIONS)} ({currentRound.remainingPasses})
        </Text>
      </Pressable>

      <RNView className="w-1 border border-l-4" />
      <Pressable
        className="flex-1 bg-red-600 active:bg-red-700 justify-center items-center"
        onPress={() => wrongAnswer()}
      >
        <Text className="text-white font-bold text-center uppercase">
          {t('actions.tabulon', SCOPE_OPTIONS)}
        </Text>
      </Pressable>
    </RNView>
  );
};

export default { View, TopBar, BottomBar };
