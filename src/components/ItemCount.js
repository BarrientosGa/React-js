import {useState} from "react"
const ItemCount = ({stock,initial,onAdd}) => {
    const [account,setAccount]= useState(initial);
    function removeCount(e){
        e.preventDefault()
        if(account > 0){
            setAccount(account - 1)
        }
    }
    function addCount(e){
        e.preventDefault()
        if(account < stock){
            setAccount(account + 1)
        }
    }
    return (
        <form className="form-ItemCount">
            <input className="form-input" value={account} readOnly/>
            <button onClick={removeCount} className="btn-remove"><span className="material-icons iconRemove">remove</span></button>
            <button onClick={addCount} className="btn-add"><span className="material-icons iconAdd">add</span></button>
            <button onClick={onAdd}>Agregar a carrito</button>
        </form>
    )
}

export default ItemCount

