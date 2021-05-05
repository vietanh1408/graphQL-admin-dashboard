import { gql } from '@apollo/client'

const addProduct = gql`
    mutation addProductMutation(
        $name: String,
        $image: String,
        $price: Int,
        $description: String,
        $quantity: Int,
        $categoryId: ID!
    ) {
        createProduct(
            name: $name,
            image: $image,
            price: $price,
            description: $description,
            quantity: $quantity,
            categoryId: $categoryId
        ) {
            id
        }
    }
`

const deleteProduct = gql`
    mutation deleteProductMutation($id: ID) {
        deleteProduct(id: $id) {
            name
        }
    }
`

const addCategory = gql`
    mutation addCategoryMutation($name: String, $logo: String) {
        createCategory(name: $name, logo: $logo) {
            id
        }
    }
`

export { addProduct, addCategory, deleteProduct }