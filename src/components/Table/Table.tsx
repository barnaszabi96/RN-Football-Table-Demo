import React, { useRef } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';
import { Header } from '../../components/Header/Header';
import { Row } from '../../components/Row/Row';
import { mockData } from '../../data/table';
import { styles } from './Table.styles';

export const Table: React.FC = () => {
  const scrollViewRef1 = useRef<ScrollView>(null);
  const scrollViewRef2 = useRef<ScrollView>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (scrollViewRef1.current) {
      scrollViewRef1.current.scrollTo({
        x: event.nativeEvent.contentOffset.x,
        animated: false,
      });
    }
  };

  return (
    <View style={styles.tableContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <Header scrollRef={scrollViewRef1} />
        <View style={styles.tableContentContainer}>
          <View style={styles.nameColumn}>
            {mockData.map((item, index) => {
              return (
                <Row key={index} index={index} item={item} contentType='name' />
              );
            })}
          </View>
          <View style={styles.detailsColumn}>
            <ScrollView
              ref={scrollViewRef2}
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              overScrollMode='never'
              onScroll={onScroll}
              scrollEventThrottle={16}
            >
              <View>
                {mockData.map((item, index) => {
                  return (
                    <Row
                      key={index}
                      index={index}
                      item={item}
                      contentType='stats'
                    />
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
