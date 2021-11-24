import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import GetCategory from "./GetCategory"
const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        GetCategory().then(resultado =>{
            setCategories(resultado)
        })
    }, [])

    return (
        <main className="main_category_logos">
            {categories.length === 0 ? <div className="ring">Cargando<span className="span_ring"></span></div> :

                categories.map(category => {
                    return <Link  key={category.id} to={`/categorias/${category.marca}`}><img src={category.img} alt="logo de celular"/></Link>
                })
            }
        </main>
    )
}

export default Category
