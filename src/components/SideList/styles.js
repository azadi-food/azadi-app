import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 4fr',
    maxHeight: '90vh',
  },

  search: {
    gridColumnStart: '1',
    gridColumnEnd:'2',
    gridRowStart: '1',
    gridRowEnd: '2',
    margin: '2em',
  },

  filter: {
    gridColumnStart: '2',
    gridColumnEnd:'3',
    gridRowStart: '1',
    gridRowEnd: '2',
    margin: '2em',
  },

  tag: {
    gridColumnStart: '1',
    gridColumnEnd:'3',
    gridRowStart: '2',
    gridRowEnd: '3',
    margin: '2em',
  },

  chip: {
    margin: '0 1em 0 0',
    borderRadius: '5%',
  },

  list: {
    backgroundColor: '#e8e8e8',
    gridColumnStart: '1',
    gridColumnEnd:'3',
    gridRowStart: '3',
    gridRowEnd: '4',
    position: 'relative',
    overflowY: 'scroll',
  },

  card: {
    display: 'grid',
    gridTemplateColumns: '5fr 2fr',
    gridTemplateRows: '1fr 1fr',
    margin: '1em',
    padding: '2em',
    backgroundColor: 'white',
  },

}));


