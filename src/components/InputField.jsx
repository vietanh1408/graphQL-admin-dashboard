import { Form, Input } from 'antd'
import FormItemLabel from 'antd/lib/form/FormItemLabel'
import React from 'react'

function InputField(props) {

    const { label, placeholder, form, field, type } = props
    const { errors } = form
    const { name } = field
    return (
        <>
            <Form.Item>
                <FormItemLabel label={label} />
                <Input type={type} {...field} placeholder={placeholder} />
                {!!errors[name] && <div className="error-message">{errors[name]}</div>}
            </Form.Item>
        </>
    )
}

export default InputField
