import { useQuery } from '@apollo/client'
import { Button, Spin } from 'antd'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import { useParams } from 'react-router'
import InputField from '../../components/InputField'
import TextAreaField from '../../components/TextAreaField'
import { getProductById } from '../../graphql-client/queries'

function ProductInfo() {
    const { id } = useParams()

    const { loading, errors, data } = useQuery(getProductById, {
        variables: {
            id
        },
        skip: id === null
    })

    if (loading) return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spin size='large' style={{ color: 'yellow' }} tip="Loading..." />
        </div>
    )
    if (errors) return <div>404 PAGE NOT FOUND !!!</div>
    if (data) return (
        <div className="product-info" >
            {console.log(data.product)}
            <img src={data?.product.image} alt={data?.product.name} />
            <div className="product-info-details">
                <Formik
                    initialValues={{
                        name: data.product.name,
                        price: data.product.price,
                        image: null,
                        description: data.product.description,
                        quantity: data.product.quantity,
                        category: data.product.category.name
                    }}
                    onSubmit={() => console.log('abc')}
                >
                    {formikProps => {
                        return (
                            <Form>
                                <FastField
                                    type="text"
                                    name="name"
                                    label="Tên sản phẩm"
                                    placeholder="Nhập tên sản phẩm"
                                    component={InputField}
                                />
                                <FastField
                                    type="number"
                                    name="price"
                                    label="Giá (USD)"
                                    placeholder="Giá"
                                    component={InputField}
                                />
                                <FastField
                                    type="file"
                                    name="image"
                                    label="Chọn hình ảnh khác"
                                    placeholder="Chọn ảnh khác"
                                    component={InputField}
                                />
                                <FastField
                                    name="description"
                                    label="Mô tả"
                                    placeholder="Nhập mô tả"
                                    component={TextAreaField}
                                />
                                <FastField
                                    type="number"
                                    name="quantity"
                                    label="Số lượng"
                                    placeholder="Nhập số lượng"
                                    component={InputField}
                                />
                                <Button type="primary" htmlType="submit" danger>
                                    Save
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default ProductInfo
