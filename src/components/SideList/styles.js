import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 6fr',
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
    position: 'relative',
    padding: '2em',
    boxShadow: '0px 5px 5px -5px',
    zIndex: '1',
  },

  tagHeader: {
    position: 'absolute',
    top: '-25%',
  },

  tagReset: {
    position: 'absolute',
    top: '-15%',
    left: '25%',
  },

  tagScroll: {
    whiteSpace: 'nowrap',
    overflowX: 'scroll',
    overflowY: 'hidden',
    paddingBottom: '1em',
  },
  '@global': {
    'tagScroll::-webkit-scrollbar': {
      width: '1px',
    },
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


