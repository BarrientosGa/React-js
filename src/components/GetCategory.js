import { firestore } from "../firebase"

const GetCategory = () => {
    const arrCategory = []
    const db = firestore

    const collection = db.collection("category")

    const promesa = collection.get()
    return (
        promesa.then(resultados => {
            resultados.forEach(resultado => {
                arrCategory.push(
                    {
                        ...resultado.data()
                    }
                )
            })
            return arrCategory
        })
    )
}

export default GetCategory
