/* eslint-disable react/prop-types */
import { Chip, FormControl, Input, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { useStyles } from './styles.js';

export function SideList(props) {
  const [list, updateLists] = useState(props.locations);
  const [tags, updateTags] = useState([]);
  const [selects, updateSelects] = useState([]);
  const [selected, updateSelected] = useState('');
  const classes = useStyles();

  const generateList = (arr) => {
    return arr.map((item, idx) => {
      return <div className={classes.card} key={idx}>{item.Company || item.name}</div>;
    });
  };

  const generateOptions = (districts) => {
    return districts.map((district, idx) => {
      if (selected == district) {
        return <option key={idx} selected value={district}>{district}</option>;
      } else {
        return <option key={idx} value={district}>{district}</option>;
      }
    });
  };
  
  const listTags = (arr) => {
    return arr.map((item, idx) => {
      return <Chip
        key={idx}
        label={item}
        color="primary"
        clickable
        onClick={ (e) => {e.target.value = item; chipFilter(item);} } 
        variant="outlined"
        classes={{ root: classes.chip}}
      />;
    });
  };
  
  const filterListSearch = (e) => {
    let newList = [];
    props.locations.forEach((location, idx) => {
      if (location.Company?.toLowerCase().includes(e.target.value.toLowerCase())){
        newList.push(location);
      }
    });
    updateLists(newList);
  };

  const chipFilter = (item) => {
    let newList = [];
    if (!item) {
      console.log('doingReset');
      props.resetMap();
      newList = [...props.locations];
      updateSelected('');
    } else {
      props.locations.forEach((location, idx) => {
        if (location.Category?.toLowerCase().includes(item?.toLowerCase())){
          newList.push(location);
        }
      });
    }
    updateLists(newList);
  };

  const selectFilter = (e) => {
    let district = e.target.value;
    updateSelected(district);
    let newList = [];
    if (!district) {
      console.log('resetting');
      newList = [...props.locations];
    } else {
      props.locations.forEach((location, idx) => {
        if (location.District?.toLowerCase().includes(district?.toLowerCase())){
          newList.push(location);
        }
      });
    }
    updateLists(newList);
  };

  var timeoutId = 0;    
  const delayChange = (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() { filterListSearch(e); }, 500);
  };

  const regenerateTags = (arr) => {
    let [newTags, newSelects] = [[], []];
    arr.forEach((item, idx) => {
      if (!newTags.includes(item.Category) && item.Category){
        newTags.push(item.Category);
      }
      if (!newSelects.includes(item.District) && item.District){
        newSelects.push(item.District);
      }
    });
    updateSelects([...newSelects]);
    updateTags([...newTags]);
  };
  
  useEffect(() => {
    console.log(tags, 'updating tags with: ', list);
    tags.length == 0 ? regenerateTags(list) : 0;
    console.log(tags, 'done tags');
    return props.updateMap(list);
  }, [list]);

  return (
    <aside className={classes.root}>
      <section className={classes.search}>
        <Input placeholder="Search" inputProps={{ 'aria-label': 'description' }} onChange={delayChange} />
      </section>
      <section className={classes.filter}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            native
            onChange={selectFilter}
            inputProps={{
              name: 'city',
              id: 'filled-age-native-simple',
            }}
          >
            <option value="">Select A District</option>
            { generateOptions(selects) }
          </Select>
        </FormControl>
      </section>
      <section className={classes.tag}>
        <h5 className={classes.tagHeader}>FILTER BY TAG</h5>
        <Chip
          key="reset"
          label="Reset"
          className={classes.tagReset}
          color="secondary"
          clickable
          onClick={ (e) => {chipFilter(null);} } 
          variant="outlined"
          classes={{ root: classes.chip}}
        />
        <div className={classes.tagScroll}>
          { listTags(tags) }

        </div>
      </section>
      <section className={classes.list}>
        { generateList(list) }
      </section>
    </aside>
  );
}