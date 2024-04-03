import Button from "@/components/Button";
import ListModel from "@/components/ListModel";
import Field from "@/components/Field";
import "./Form.css";
import { createTeam } from "@/store/reducer/teams";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { createCollaborator } from "@/store/reducer/collaborator";
import { useState } from "react"

const Form = () => {
    const dispatch = useAppDispatch();

    const times = useAppSelector(state => state.team.teams);

    const [colaboradorNome, setColabodadorNome] = useState("");
    const [colaboradorCargo, setColabodadorCargo] = useState("");
    const [colaboradorImagem, setColabodadorImagem] = useState("");
    const [colaboradorData, setColabodadorData] = useState("");
    const [colaboradorTime, setColabodadorTime] = useState("");

    const [timeNome, setTimeNome] = useState("");
    const [timeCor, setTimeCor] = useState("#ff0000");

    const aoCriarColaborador = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(createCollaborator({
            nome: colaboradorNome,
            cargo: colaboradorCargo,
            imagem: colaboradorImagem,
            dataDeEntrada: colaboradorData,
            timeSelecionado: colaboradorTime,
        }))

    };

    const aoCriarTime = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        dispatch(createTeam({
            name: timeNome,
            color: timeCor
        }))
    }

    return (
        // Colaboorador
        <section className="form_container">
            <form onSubmit={event => aoCriarColaborador(event)}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Field
                    onChange={setColabodadorNome}
                    required
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={colaboradorNome}
                />
                <Field
                    onChange={setColabodadorCargo}
                    required
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={colaboradorCargo}
                />
                <Field
                    onChange={setColabodadorImagem}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={colaboradorImagem}
                />
                <Field
                    onChange={setColabodadorData}
                    required
                    label="Data de Entrada"
                    placeholder='dd/mm/aaaa'
                    value={colaboradorData}
                    type="date"
                />
                <ListModel
                    onChange={setColabodadorTime}
                    required
                    label="Time"
                    itens={times.map(time => time.name)}
                    value={colaboradorTime}
                />
                <Button>Criar card</Button>
            </form>

            {/* Time */}
            <form onSubmit={aoCriarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Field
                    onChange={setTimeNome}
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={timeNome}
                />
                <Field
                    onChange={setTimeCor}
                    required
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={timeCor}
                    type="color"
                />
                <Button>Criar um novo time</Button>
            </form>
        </section>
    )
}

export default Form