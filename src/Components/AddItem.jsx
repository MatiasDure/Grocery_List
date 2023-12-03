import { FaPlus } from "react-icons/fa";
import apiRequest from '../apiRequests';

function AddItem({newItem, setNewItem, items, setItems, API_URL, setFetchError}) {

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(newItem.trim().length === 0) return;

        const itemToAdd = {
            id: items.length ? items[items.length - 1].id + 1 : 0,
            item: newItem,
            checked: false
        }

        const newListItems = [...items, itemToAdd];

        setItems(newListItems);

        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemToAdd)
        }

        const result = await apiRequest(API_URL, postOptions);

        if(result) setFetchError(result);

        setNewItem("");
    } 

    return (
        <form className="addForm">
            <label htmlFor="addItem">Add Item</label>
            <input 
                autoFocus
                type="text"
                id="addItem"
                placeholder="Add Item"
                value={newItem}
                required 
                onChange={handleChange}
            />
            <button 
                type="submit"
                aria-label="Add Item"
                onClick={handleSubmit}
            >
                <FaPlus />
            </button>
        </form>
    );
}

export default AddItem;