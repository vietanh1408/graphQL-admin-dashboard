import { gql } from '@apollo/client'

const getProducts = gql`
    query getProductsQuery {
        products {
            id
            name
            price
            image
            description
            quantity
            category{
                name
            }
        }
    }
`

const getProductById = gql`
    query getProductById($id: ID) {
        product(id: $id) {
            id
            name
            price
            image
            description
            quantity
            category{
                id
                name
                products {
                    id
                    name
                }
            }
        }
    }
`
const getProductsByCategory = gql`
    query getProductsByCategory($id: ID!) {
        category (id: $id) {
            name
            products {
                id
                name
                price
                image
                description
                quantity
                category{
                    name
                }
            }
        }
    }
`

const getCategories = gql`
    query getCategoriesQuery {
        categories {
            id
            name
        }
    }
`



export { getProducts, getCategories, getProductById, getProductsByCategory }