import { firestore } from "../firebase" // acceso a la base de datos

const getDetail = (id) => {
    const arrProductos = [];
    const db = firestore

    const collection = db.collection("products")

    const query = collection.doc(id)

    const promesa = query.get()

    return (
        promesa.then(resultado => {
            arrProductos.push(
                {
                    id: resultado.id,
                    ...resultado.data()
                }
            )
            return arrProductos;
        })
    )
}

export default getDetail

