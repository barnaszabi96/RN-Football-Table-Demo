import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../../components/Header/Header';
import { Row } from '../../components/Row/Row';
import { mockData } from '../../data/table';
import { styles } from './Table.styles';

export const Table: React.FC = () => {
  return (
    <View style={styles.tableContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        <Header />
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
              horizontal
              showsHorizontalScrollIndicator={false}
              bounces={false}
              overScrollMode='never'
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
