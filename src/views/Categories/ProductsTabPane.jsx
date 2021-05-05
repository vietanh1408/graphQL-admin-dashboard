import { DeleteOutlined, FormOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@apollo/client'
import { Button, Spin, Table } from 'antd'
import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { deleteProduct } from '../../graphql-client/mutations'
import { getProductsByCategory } from '../../graphql-client/queries'

function ProductsTabPane({ categoryId }) {

    const { loading, errors, data } = useQuery(getProductsByCategory, {
        variables: {
            id: categoryId
        },
        skip: categoryId === null
    })
    const [deleteProductById] = useMutation(deleteProduct)
    const { path } = useRouteMatch()

    const handleDelete = (id) => {
        deleteProductById({
            variables: { id },
            refetchQueries: [{ query: getProductsByCategory }]
        })
    }

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
            sorter: (a, b) => {
                if (a.name.toLowerCase().trim() < b.name.toLowerCase().trim()) return -1
                if (a.name.toLowerCase().trim() > b.name.toLowerCase().trim()) return 1
                return 0
            },
            render: text => <p>{text}</p>,
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            sorter: {
                compare: (a, b) => a.price - b.price,
                multiple: 3
            },
            render: (price) => <p>{price} VNĐ</p>
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            sorter: {
                compare: (a, b) => a.quantity - b.quantity,
                multiple: 3
            },
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
                    <Button icon={<DeleteOutlined />} onClick={() => handleDelete(text.id)} />
                </>
            ),
        },
    ];

    if (loading) return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spin size='large' style={{ color: 'yellow' }} tip="Loading..." />
        </div>
    )

    if (errors) return <div>404 PAGE NOT FOUND !!!</div>

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
