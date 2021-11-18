import { firestore } from "../firebase" //acceder a la base de datos


const getItems = (id) => {
    const arrProducts = []
    const db = firestore;

    const collection = db.collection("products");
    if (id) {
        const query = collection.where("marca", "==", id);

        const promesa = query.get();
        return (
            promesa.then(resultados => {
                resultados.forEach(resultado => {
                    arrProducts.push(
                        {
                            id: resultado.id,
                            ...resultado.data()
                        }
                    )
                })
                return arrProducts;
            })
        )
    }
    else {
        const promesa = collection.get();
        return (
            promesa.then(resultados => {
                resultados.forEach(resultado => {
                    arrProducts.push(
                        {
                            id: resultado.id,
                            ...resultado.data()
                        }
                    )
                })
                return arrProducts;
            })
        )
    }

}

export default getItems
