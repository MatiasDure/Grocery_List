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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedItems = () => {
        setIsLoading(false);
    }

    //To show how the loading would work for real world delay
    setTimeout(() => {
      fetchedItems();

    }, 2000);

  }, []);

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
      <main>
        {isLoading ? 
          <p>Loading...</p> : 
          <Content 
            items={items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}
            setItems={setItems}
          />
        }
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
