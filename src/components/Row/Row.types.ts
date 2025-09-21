import { TableData } from '../../data/table.types';

export type RowProps = {
  index: number;
  item: TableData;
  contentType: 'name' | 'stats';
};
