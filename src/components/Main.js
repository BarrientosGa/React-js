import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
const Main = () => {
    return (
        <main className="comp-main">
            <ItemListContainer contador={0}/>
            <ItemDetailContainer/>
        </main>
            
    )
}

export default Main
