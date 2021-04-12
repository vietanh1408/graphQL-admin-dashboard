import { useQuery } from '@apollo/client'
import { Button, Spin } from 'antd'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import InputField from '../../components/InputField'
import SelectField from '../../components/SelectField'
import TextAreaField from '../../components/TextAreaField'
import { getCategories } from '../../graphql-client/queries'

function AddProduct({ onSubmit }) {

    const { loading, errors, data } = useQuery(getCategories)
    if (loading) return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spin size='large' style={{ color: 'yellow' }} tip="Loading..." />
        </div>
    )

    if (errors) return <div>404 PAGE NOT FOUND !!!</div>

    if (data) {
        return (
            <div className="add-product" style={{ marginBottom: '3rem' }}>
                <Formik
                    initialValues={{
                        name: '',
                        price: null,
                        image: null,
                        description: '',
                        quantity: null,
                        categoryId: '',
                    }}
                    onSubmit={onSubmit}
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
                                    label="Giá (VNĐ)"
                                    placeholder="Nhập giá sản phẩm"
                                    component={InputField}
                                />
                                <FastField
                                    type="text"
                                    name="image"
                                    label="Ảnh sản phẩm"
                                    placeholder=""
                                    component={InputField}
                                />
                                <FastField
                                    name="description"
                                    label="Mô tả sản phẩm"
                                    placeholder="Nhập tên sản phẩm"
                                    component={TextAreaField}
                                />
                                <FastField
                                    type="number"
                                    name="quantity"
                                    label="Số lượng"
                                    placeholder="Nhập số lượng"
                                    component={InputField}
                                />
                                <FastField
                                    name="categoryId"
                                    label="Danh mục sản phẩm"
                                    placeholder="Chọn danh mục sản phẩm"
                                    data={data?.categories}
                                    component={SelectField}
                                />
                                <Button type="primary" danger htmlType="submit" style={{ marginTop: '2rem' }}>
                                    Create a new product
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    }


}

export default AddProduct
