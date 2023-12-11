import { FaPlus } from "react-icons/fa";

function AddItem({newItem, setNewItem, items, setItems}) {

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(newItem.trim().length === 0) return;

        const itemToAdd = {
            id: items.length ? items[items.length - 1].id + 1 : 0,
            item: newItem,
            checked: false
        }

        const newListItems = [...items, itemToAdd];

        setItems(newListItems);

        localStorage.setItem("shoppinglist", JSON.stringify(newListItems));

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