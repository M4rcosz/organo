import "./Field.css";

interface FieldProps {
    type?: 'text' | 'email' | 'date' | 'password' | 'number' | 'color'
    required?: boolean
    label: string
    placeholder: string
    aoAlterado: (valor: string) => void
    value: string
}

const Field = ({ type = 'text', required = false, label, placeholder, aoAlterado, value }: FieldProps) => {

    const placeholderText = placeholder;

    let aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value);
    }


    return (
        <section className={`field field_${type}`}>
            <label>{label}</label>
            <input
                style={{ cursor: type === "color" ? "pointer" : undefined }}
                type={type}
                value={value}
                onChange={aoDigitar}
                required={required}
                placeholder={placeholderText}
            />
        </section>
    )
}

export default Field