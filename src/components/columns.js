import data from './Mock_Data.json';
export const COLUMNS = [
  {
    Header: 'Year',
    Footer: 'Year',
    accessor: 'data.prizes.year',
  },
  {
    Header: 'Category',
    Footer: 'Category',
    accessor: 'data.prizes.category',
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'data.prizes.laureates.firstname',
  },
];
