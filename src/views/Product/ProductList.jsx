import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { Button, Table } from 'antd';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { getProducts } from './../../graphql-client/queries';

function ProductList() {

    const { loading, error, data } = useQuery(getProducts)
    const { path } = useRouteMatch()

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
                    <Button icon={<DeleteOutlined />} />
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
