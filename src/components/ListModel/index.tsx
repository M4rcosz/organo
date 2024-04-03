import "./ListModel.css";

interface ListModelProps {
    label: string
    onChange: (valor: string) => void
    required: boolean
    value: string
    itens: string[]
}

const ListModel = ({ label, onChange, itens, required, value }: ListModelProps) => {

    return (
        <section className="listModel">
            <label>
                {label}
            </label>
            <select
                onChange={event => onChange(event.target.value)}
                required={required}
                value={value}
            >
                <option value="" disabled>Selecione o Time</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </section>
    )
}

export default ListModel