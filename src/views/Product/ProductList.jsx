import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { useQuery, useMutation } from '@apollo/client';
import { Button, Table } from 'antd';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { getProducts } from './../../graphql-client/queries';
import { deleteProduct } from './../../graphql-client/mutations';

function ProductList() {

    const { loading, error, data } = useQuery(getProducts)
    const [deleteProductById] = useMutation(deleteProduct)
    const { path } = useRouteMatch()
    const handleDelete = (id) => {
        deleteProductById({
            variables: { id },
            refetchQueries: [{ query: getProducts }]
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
            sorter: (a, b) => {
                if (a.category.name.toLowerCase().trim() < b.category.name.toLowerCase().trim()) return -1
                if (a.category.name.toLowerCase().trim() > b.category.name.toLowerCase().trim()) return 1
                return 0
            },
            render: (category) => <p>{category?.name}</p>
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

    if (error) return <div>Error fetch data</div>

    if (loading) return <Table columns={columns} loading={true} />

    if (data) {

        const { products } = data

        return (
            <div className="product-page">
                <h2>Sản phẩm mới thêm</h2>
                <Table columns={columns} dataSource={products} rowKey="name" />
            </div>
        )
    }
}

export default ProductList
