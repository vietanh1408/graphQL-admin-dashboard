import { Form } from 'antd'
import FormItemLabel from 'antd/lib/form/FormItemLabel'
import React from 'react'
import Select from 'react-select'


function SelectField(props) {

    const { label, form, field, data, placeholder } = props
    const { errors } = form
    const { name, value } = field

    const categories = data?.map(category => {
        return { ...category, label: category.name, value: category.id }
    })
    const selectedOption = data?.find(category => category.value === value)

    const handleSelectOptionChange = (selectedOption) => {

        const selectedValue = selectedOption ? selectedOption.id : selectedOption
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent)
    }

    return (
        <>
            <Form.Item>
                <FormItemLabel label={label} />
                <Select
                    id={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectOptionChange}
                    placeholder={placeholder}
                    options={categories}
                />
                {!!errors[name] && <div className="error-message">{errors[name]}</div>}
            </Form.Item>
        </>
    )
}

export default SelectField