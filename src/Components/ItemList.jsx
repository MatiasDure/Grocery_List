import apiRequest from "../apiRequests";
import LineItem from "./LineItem";

function ItemList({items, setItems, API_URL, setFetchError}) {
    
    const handleCheck = async (id) => {
        const listItems = items.map( (item) => item.id === id ? {...item, checked: !item.checked } : item)

        setItems(listItems);

        const updatedItem = listItems.find( (item) => item.id === id );

        const updateOptions = {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ checked: updatedItem.checked})
        };

        const reqUrl = `${API_URL}/${id}`;

        const result = await apiRequest(reqUrl, updateOptions);

        if(result) setFetchError(result);
    }
    
    const handleDelete = async (id) => {
        const listItems = items.filter( (item) => item.id !== id );
        
        setItems(listItems);

        const deleteOptions = { method: "DELETE" };
        const reqUrl = `${API_URL}/${id}`;

        const result = await apiRequest(reqUrl, deleteOptions);

        if(result) setFetchError(result);
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