import type { 
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParameterList = {
  Auth: NavigatorScreenParams<AuthStackParameterList>;
}

export type RootStackScreenProps<T extends keyof RootStackParameterList> =
  NativeStackScreenProps<RootStackParameterList, T>;

export type AuthStackParameterList = {
  Login: undefined;
}

export type AuthStackScreenProps<T extends keyof AuthStackParameterList> =
  CompositeScreenProps<  
    NativeStackScreenProps<AuthStackParameterList, T>,
    RootStackScreenProps<keyof RootStackParameterList>
  >;