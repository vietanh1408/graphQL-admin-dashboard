import { useQuery } from '@apollo/client'
import { Tabs } from 'antd'
import React from 'react'
import { getCategories } from '../../graphql-client/queries'
import ProductsTabPane from './ProductsTabPane'

function CategoriesList() {

    const { data } = useQuery(getCategories)

    return (
        <div className="categories-page">

            <Tabs defaultActiveKey={data?.categories[0].id}>
                {data?.categories.map(category => (
                    <Tabs.TabPane tab={category.name} key={category.id}>
                        <ProductsTabPane categoryId={category.id} />
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </div>
    )
}

export default CategoriesList
