import React from 'react';
import { View, Text, Pressable } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import SliderInput from '@react-native-community/slider';
import cn from 'classnames';

import { COLORS, LANGUAGES } from '@app/constants';
import { useSettings, useLocale } from '@app/hooks';
import { RadioGroup } from '@app/components';
import { TurkishFlag, UnitedKingdomFlag } from '@app/icons';

type SettingsModalPropTypes = {
  isVisible: boolean;
  onClose: () => void;
};

type RoundDurationItemTypes = {
  label: string;
  value: number;
};

const TEAM_COUNT_OPTIONS = Array.from({ length: 6 }, (_, index) => index + 1);

const PASS_COUNT_SLIDER_OPTIONS = {
  minimumValue: 0,
  step: 1,
  maximumValue: 10,
};

const ROUND_COUNT_SLIDER_OPTIONS = {
  minimumValue: 1,
  step: 1,
  maximumValue: 5,
};

const SettingsModal = ({ isVisible, onClose }: SettingsModalPropTypes) => {
  const SCOPE_OPTIONS = {
    scope: 'components.SettingsModal',
  };

  const { t, changeLocale } = useLocale();
  const {
    teamCount,
    setTeamCount,
    roundDuration,
    setRoundDuration,
    passCount,
    setPassCount,
    roundCount,
    setRoundCount,
  } = useSettings();

  const ROUND_DURATION_OPTIONS = [60, 90, 120, 150].map((value) => ({
    label: `${value} ${t('labels.seconds', SCOPE_OPTIONS)}`,
    value,
  })) as RoundDurationItemTypes[];

  return (
    <Modal
      className="m-0 flex-col justify-end"
      isVisible={isVisible}
      animationIn="slideInUp"
      backdropOpacity={0.5}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      animationOutTiming={800}
      onDismiss={onClose}
      swipeDirection={['down']}
    >
      <LinearGradient
        colors={COLORS.GRADIENT_COLORS}
        style={{ gap: 30 }}
        className="bg-white p-8 flex flex-col rounded-t-3xl"
      >
        <View className="flex-col">
          <Text className="mb-3 font-semibold text-white capitalize">
            {t('labels.teamCount', SCOPE_OPTIONS)}
          </Text>
          <RadioGroup
            gap={10}
            data={TEAM_COUNT_OPTIONS}
            renderItem={(item: number) => (
              <Pressable
                onPress={() => {
                  setTeamCount(item);
                }}
                className={cn('bg-amber-600 active:bg-amber-700 px-4 py-2 rounded-xl shadow', {
                  'bg-amber-800': item === teamCount,
                })}
              >
                <Text className="text-white font-semibold">{item}</Text>
              </Pressable>
            )}
          />
        </View>
        <View className="flex-col">
          <Text className="mb-3 font-semibold text-white capitalize">
            {t('labels.roundDuration', SCOPE_OPTIONS)}
          </Text>
          <RadioGroup
            gap={10}
            data={ROUND_DURATION_OPTIONS}
            renderItem={(item: RoundDurationItemTypes) => (
              <Pressable
                onPress={() => {
                  setRoundDuration(item.value);
                }}
                className={cn('bg-amber-600 active:bg-amber-700 p-2 rounded-xl shadow', {
                  'bg-amber-800': item.value === roundDuration,
                })}
              >
                <Text className="text-white font-semibold">{item.label}</Text>
              </Pressable>
            )}
          />
        </View>
        <View className="flex-col">
          <Text className="font-semibold text-white capitalize">
            {t('labels.passCount', SCOPE_OPTIONS)} ({passCount})
          </Text>
          <SliderInput
            minimumTrackTintColor={COLORS.AMBER[600]}
            maximumTrackTintColor={COLORS.AMBER[300]}
            {...PASS_COUNT_SLIDER_OPTIONS}
            value={passCount}
            onValueChange={setPassCount}
          />
        </View>
        <View className="flex-col">
          <Text className="font-semibold text-white capitalize">
            {t('labels.roundCount', SCOPE_OPTIONS)} ({roundCount})
          </Text>
          <SliderInput
            minimumTrackTintColor={COLORS.AMBER[600]}
            maximumTrackTintColor={COLORS.AMBER[300]}
            {...ROUND_COUNT_SLIDER_OPTIONS}
            value={roundCount}
            onValueChange={setRoundCount}
          />
        </View>
        <View className="flex-col">
          <View style={{ gap: 20 }} className="flex-row justify-center">
            <Pressable onPress={() => changeLocale(LANGUAGES.TURKISH)} className="shadow">
              <TurkishFlag className="h-14 w-14 shadow" />
            </Pressable>
            <Pressable onPress={() => changeLocale(LANGUAGES.ENGLISH)} className="shadow">
              <UnitedKingdomFlag className="h-14 w-14 shadow" />
            </Pressable>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <Pressable
            onPress={onClose}
            className="bg-green-500 py-4 px-8 rounded-full active:bg-green-600 shadow border border-white"
          >
            <Text className="text-white font-bold text-center uppercase">
              {t('actions.close', SCOPE_OPTIONS)}
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default SettingsModal;
