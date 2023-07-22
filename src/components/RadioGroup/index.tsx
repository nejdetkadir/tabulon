import { View } from 'react-native';
import React from 'react';

import cn from 'classnames';

type RadioGroupPropTypes = {
  gap?: number;
  direction?: 'vertical' | 'horizontal';
  data: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  value?: any;
};

const RadioGroup = ({ gap, direction, data, renderItem }: RadioGroupPropTypes) => {
  return (
    <View
      style={{ gap }}
      className={cn('flex-row justify-between', {
        'flex-row': direction === 'horizontal',
        'flex-col': direction === 'vertical',
      })}
    >
      {data.map((item, index: number) => (
        <View key={index}>{renderItem(item, index)}</View>
      ))}
    </View>
  );
};

export default RadioGroup;
