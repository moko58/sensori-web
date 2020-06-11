import React from 'react';

const ItemContext = React.createContext();

export const UserProvider = ItemContext.Provider;
export const UserConsumer = ItemContext.Consumer;

export default ItemContext;
