import React from 'react';

const myOptions = [
  {
    itemKey: 0,
    itemName: '',
    itemSelected: false,
  },
];

const ItemContext = React.createContext(myOptions);

export default ItemContext;
