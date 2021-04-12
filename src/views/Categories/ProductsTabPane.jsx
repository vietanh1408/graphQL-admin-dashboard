import { DeleteOutlined, FormOutlined } from '@ant-design/icons'
import { useQuery } from '@apollo/client'
import { Button, Spin, Table } from 'antd'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { getProductsByCategory } from '../../graphql-client/queries'

function ProductsTabPane({ categoryId }) {

    const { loading, errors, data } = useQuery(getProductsByCategory, {
        variables: {
            id: categoryId
        },
        skip: categoryId === null
    })
    const { path } = useRouteMatch()

    if (loading) return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spin size='large' style={{ color: 'yellow' }} tip="Loading..." />
        </div>
    )

    if (errors) return <div>404 PAGE NOT FOUND !!!</div>

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'image',
            key: 'image',
            render: (image) => <img src={image} alt="img-products" style={{ width: '2rem', height: '2rem' }} />
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
            render: text => <p>{text}</p>,
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: (price) => <p>{price} VNĐ</p>
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Danh mục',
            dataIndex: 'category',
            key: 'category',
            render: (category) => <p>{category.name}</p>
        },
        {
            title: 'Cập nhật',
            key: 'action',
            render: (text) => (
                <>
                    <Link to={`${path}/${text.id}`}>
                        <Button icon={<FormOutlined />} />
                    </Link>
                    <Button icon={<DeleteOutlined />} />
                </>
            ),
        },
    ];

    if (data) {
        const { category } = data
        const { products } = category
        return (
            <div>
                <Table columns={columns} dataSource={products} rowKey="name" />
            </div>
        )
    }
}

export default ProductsTabPane
