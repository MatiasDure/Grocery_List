import ItemList from "./ItemList";

function Content (props) {

    return (
        <main>
            {props.items.length ? (
                <ItemList 
                    items={props.items}
                    setItems={props.setItems}
                />
            ) : (
                <p>No items found</p>
            )}
        </main>
    )
}

export default Content;