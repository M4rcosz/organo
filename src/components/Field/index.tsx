import "./Field.css";

interface FieldProps {
    type?: 'text' | 'date' | 'color'
    required?: boolean
    label: string
    placeholder: string
    onChange: (valor: string) => void
    value: string
}

const Field = (
    {
        type = 'text',
        required = false,
        label,
        placeholder,
        onChange,
        value,
    }: FieldProps) => {


    return (
        <section className={`field field_${type}`}>
            <label>{label}</label>
            <input
                style={{ cursor: type === "color" ? "pointer" : undefined }}
                type={type}
                value={value}
                onChange={event => onChange(event.target.value)}
                required={required}
                placeholder={placeholder}
            />
        </section>
    )
}

export default Field