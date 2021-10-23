import {useEffect,useState} from "react"

const Item = ({item}) => {
    const [producto,setProducto] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setProducto(item)
        },2000)
    },[])
    if(producto.length===0){
        return(<p>Cargando...</p>)
    }
    else{
        return(
            <div>
                <img src={producto.img}></img>
                <p>{producto.title}</p>
                <p>${producto.price}</p>
            </div>
                
        )
    }
    /*
    const promesa = new Promise((res,rej) =>{
        rej()
    })
    */
/*
    promesa
        .then(()=>{
            return(
                <>
                    <img src={producto.img}/>
                    <p>{producto.title}</p>
                    <p>${producto.price}</p>
                </>
            )
        })
        .catch(()=>{
            return(
                <p>Cargando...</p>
            )
        })
    */
    
}

export default Item
