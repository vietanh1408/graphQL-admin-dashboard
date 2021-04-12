import { Form } from 'antd'
import FormItemLabel from 'antd/lib/form/FormItemLabel'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'

function TextAreaField(props) {
    const { label, placeholder, form, field } = props
    const { errors } = form
    const { name } = field
    return (
        <>
            <Form.Item>
                <FormItemLabel label={label} />
                <TextArea {...field} rows="5" placeholder={placeholder} />
                {!!errors[name] && <div className="error-message">{errors[name]}</div>}
            </Form.Item>
        </>
    )
}

export default TextAreaField
