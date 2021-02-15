import React, { useEffect, useState } from 'react';

export const SideList = (props) => {
  // eslint-disable-next-line react/prop-types
  const [list, updateList] = useState(props);

  const generateList = (arr) => {
    console.log(arr);
    return arr.map(item => {
      return <li key={item._id}>{item.name}</li>;
    });
  };

  useEffect(() => {
    // updateList(props);
  }, []);

  return (
    <aside>
      <ul>
        { generateList(list) }
      </ul>
    </aside>
  );
};