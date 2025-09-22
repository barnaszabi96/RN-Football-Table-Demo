import { ScrollView, View } from 'react-native';
import { Cell } from '../Cell/Cell';
import { styles } from './Header.styles';
import { RefObject } from 'react';

type HeaderProps = {
  scrollRef?: RefObject<ScrollView | null>;
};

export const Header: React.FC<HeaderProps> = ({ scrollRef }) => {
  return (
    <View style={styles.headerContainer}>
      <Cell content='#' />
      <Cell content='Club' width={100} />
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode='never'
        style={styles.headerScrollView}
        scrollEventThrottle={16}
        scrollEnabled={false}
      >
        <Cell content='MP' />
        <Cell content='W' />
        <Cell content='D' />
        <Cell content='L' />
        <Cell content='GF' />
        <Cell content='GA' />
        <Cell content='GD' />
        <Cell content='P' />
        <Cell content='Form' width={100} />
      </ScrollView>
    </View>
  );
};
