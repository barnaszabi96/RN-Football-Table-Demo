import { TableData } from '../../data/table.types';

export interface RowProps {
  index: number;
  item: TableData;
  contentType: 'name' | 'stats';
}
