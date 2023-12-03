import Header from './Components/Header';
import Content from './Components/Content';
import SearchItems from './Components/SearchItems';
import AddItem from './Components/AddItem';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")) || []);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items])

  return (
    <div className="App">
      <Header title="Groceries"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        items={items}
        setItems={setItems}
      />
      <SearchItems 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}
        setItems={setItems}
       />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
