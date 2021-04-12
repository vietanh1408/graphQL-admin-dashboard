import { useMutation } from '@apollo/client'
import { Tabs } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { addCategory, addProduct } from '../../graphql-client/mutations'
import { getCategories, getProducts } from '../../graphql-client/queries'
import AddCategory from './AddCategory'
import AddProduct from './AddProduct'

function AddItem() {

    const history = useHistory()
    const [createCategory] = useMutation(addCategory)
    const [createProduct] = useMutation(addProduct)

    const handleAddCategory = ({ name, logo }) => {
        createCategory({
            variables: { name, logo },
            refetchQueries: [{ query: getCategories }]
        })
        history.push('/')
    }

    const handleAddProduct = ({ name, price, image, description, quantity, categoryId }) => {
        createProduct({
            variables: { name, image, price, description, quantity, categoryId },
            refetchQueries: [{ query: getProducts }]
        })
        history.push('/')
    }

    return (
        <div>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Thêm danh mục sản phẩm" key="1">
                    <AddCategory onSubmit={handleAddCategory} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Thêm sản phẩm" key="2">
                    <AddProduct onSubmit={handleAddProduct} />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default AddItem
