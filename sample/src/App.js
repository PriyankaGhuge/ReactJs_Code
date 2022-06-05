import Header from './Header';
//import Content from './Content';
import Footer from './Footer';
import Lists from './Lists';
import { useState } from 'react';
function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "one half pound bag of Cocoa Covered Alomonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
]);

const handleCheck = (id) => {
  //console.log(`key: ${id}`)
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
  setItems(listItems);
  localStorage.setItems('shoppinglist', JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  localStorage.setItems('shoppinglist', JSON.stringify(listItems));
}


  
  return (
    <div className="App">
    <Header title="Groceries List" />
    <Lists
       items={items}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
       />
    <Footer length={items.length} />
    
    </div>
  );
}

export default App;
