import { ROUTES } from '@app/constants';
import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.GAME]: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
