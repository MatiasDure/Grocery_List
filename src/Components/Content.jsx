import ItemList from "./ItemList";

function Content (props) {

    return (
        <>
            {props.items.length ? (
                <ItemList 
                    items={props.items}
                    setItems={props.setItems}
                    API_URL={props.API_URL}
                    setFetchError={props.setFetchError}
                />
            ) : (
                <p>No items found</p>
            )}
        </>
    )
}

export default Content;