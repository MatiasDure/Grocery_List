import Header from './Components/Header';
import Content from './Components/Content';
import SearchItems from './Components/SearchItems';
import AddItem from './Components/AddItem';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';

function App() {
  //using npx json-server -p 3500 -w data/db.json 
  //(-p stands for port and -w for watch). 
  //Used simulate a server to test fetching data
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);

        if(!response.ok) throw Error("Did not receive expected data");

        const listItems = await response.json();

        setItems(listItems);

        setFetchError(null);

      }catch(err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    //simulate fetch delay of 2 seconds
    setTimeout(() => {
      fetchItems();

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
        API_URL={API_URL}
        setFetchError={setFetchError}
      />
      <SearchItems 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading ? 
          <p>Loading...</p> : 
          fetchError ? 
          <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p> :
          <Content 
            items={items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}
            setItems={setItems}
            API_URL={API_URL}
            setFetchError={setFetchError}
          />
        }
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
