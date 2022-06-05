import React from 'react'
import ItemList from './ItemList';

const Lists = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
        {items.length ? (
            <ItemList
               items={items}
               handleCheck={handleCheck}
               handleDelete={handleDelete}
            />
            
        ) : (
            <p style={{ marginTip: '2rem' }}> Your list is empty.</p>
        )}
    </main>
  )

}
export default Lists
