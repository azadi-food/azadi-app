import { Chip, FormControl, Input, InputLabel, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { useStyles } from './styles.js';

export const SideList = (props) => {
  // eslint-disable-next-line react/prop-types
  const [list, updateList] = useState(props.locations);

  const classes = useStyles();

  const generateList = (arr) => {
    console.log(arr);
    return arr.map((item, idx) => {
      return <div className={classes.card} key={item.idx}>{item.name}</div>;
    });
  };

  useEffect(() => {
    // updateList(props);
  }, []);

  return (
    <aside className={classes.root}>
      <div className={classes.search}>
        <Input placeholder="Search" inputProps={{ 'aria-label': 'description' }} />
      </div>
      <div className={classes.filter}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            native
            value={10}
            // onChange={handleChange}
            inputProps={{
              name: 'city',
              id: 'filled-age-native-simple',
            }}
          >
            <option value="">Select A City</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>
      <div className={classes.tag}>
        <h5>FILTER BY TAG</h5>
        <Chip
          label="Restaurant"
          color="secondary"
          clickable="true"
          // onClick={handleClick}
          variant="outlined"
          classes={{ root: classes.chip}}
        />
        <Chip
          label="Mart"
          color="primary"
          clickable="true"
          // onClick={handleClick}
          variant="outlined"
          classes={{ root: classes.chip}}
        />
      </div>
      <div className={classes.list}>
        { generateList(list) }
      </div>
    </aside>
  );
};