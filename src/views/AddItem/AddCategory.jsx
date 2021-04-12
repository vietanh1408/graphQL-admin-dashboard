
import { Button } from 'antd'
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import InputField from '../../components/InputField'

function AddCategory({ onSubmit }) {

    let schema = yup.object().shape({
        name: yup.string().required('This field is required !'),
        logo: yup.mixed().required('This field is required !'),
    })

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    logo: null,
                }}
                onSubmit={onSubmit}
                validationSchema={schema}
            >
                {formikProps => {
                    return (
                        <Form>
                            <FastField
                                type="text"
                                name="name"
                                label="Category's name"
                                placeholder="Enter Category's name"
                                component={InputField}
                            />
                            <FastField
                                type="file"
                                name="logo"
                                label="Category's logo"
                                placeholder=""
                                component={InputField}
                            />
                            <Button type="primary" htmlType="submit" danger>
                                Create a new category
                            </Button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default AddCategory
