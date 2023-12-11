import LineItem from "./LineItem";

function ItemList({items, setItems}) {
    
    const setAndSaveItems = (items) => {
        setItems(items);
        localStorage.setItem("shoppinglist", JSON.stringify(items));
    }

    const handleCheck = (id) => {
        const listItems = items.map( (item) => item.id === id ? {...item, checked: !item.checked } : item)
        setAndSaveItems(listItems);
    }
    
    const handleDelete = (id) => {
        const listItems = items.filter( (item) => item.id !== id );
        setAndSaveItems(listItems);
    }

    return (
        <ul>
            {items.map( (item) => (
                <LineItem 
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
                ))
            }
        </ul>
    );
}

export default ItemList;