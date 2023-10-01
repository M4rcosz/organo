import "./ListModel.css";

interface ListModelProps {
    label: string
    aoAlterado: (valor: string) => void
    required: boolean
    value: string
    itens: string[]

}

const ListModel = ({ label, aoAlterado, itens, required, value }: ListModelProps) => {

    return (
        <section className="listModel">
            <label>
                {label}
            </label>
            <select
                onChange={evento => aoAlterado(evento.target.value)}
                required={required}
                value={value}
            >
                <option value=""></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </section>
    )
}

export default ListModel