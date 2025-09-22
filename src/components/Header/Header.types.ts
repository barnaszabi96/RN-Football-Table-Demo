import { RefObject } from 'react';
import { ScrollView } from 'react-native';

export interface HeaderProps {
  scrollRef?: RefObject<ScrollView | null>;
}
