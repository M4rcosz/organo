import "./Field.css";

interface FieldProps {
    type?: 'text' | 'email' | 'date' | 'password' | 'number' | 'color'
    required?: boolean
    label: string
    placeholder: string
    aoAlterado: (valor: string) => void
    value: string
}

const Field = (
    {
        type = 'text',
        required = false,
        label,
        placeholder,
        aoAlterado,
        value
    }: FieldProps) => {

    return (
        <section className={`field field_${type}`}>
            <label>{label}</label>
            <input
                style={{ cursor: type === "color" ? "pointer" : undefined }}
                type={type}
                value={value}
                onChange={evento => aoAlterado(evento.target.value)}
                required={required}
                placeholder={placeholder}
            />
        </section>
    )
}

export default Field