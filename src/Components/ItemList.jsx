import LineItem from "./LineItem";

function ItemList({items, setItems}) {
    
    const handleCheck = (id) => {
        const listItems = items.map( (item) => item.id === id ? {...item, checked: !item.checked } : item)

        setItems(listItems);
    }
    
    const handleDelete = (id) => {
        const listItems = items.filter( (item) => item.id !== id );
        
        setItems(listItems);
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