import Button from "@/components/Button";
import ListModel from "@/components/ListModel";
import Field from "@/components/Field";
import "./Form.css";
import { addTeam, resetTeamInput, setTeamColor, setTeamName } from "@/store/reducer/teams";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { createCollaborator, resetCollaboratorsInput, setCollaboratorDate, setCollaboratorImage, setCollaboratorName, setCollaboratorOffice, setCollaboratorTeam } from "@/store/reducer/collaborator";

const Form = () => {
    const dispatch = useAppDispatch();

    const {
        createTeamTemplate: {
            teamName:
            inputTeamName,
            teamColor:
            inputTeamColor
        },
        teams: times
    } = useAppSelector(state => state.team);

    const colaborador = useAppSelector(state => state.membersTeam.createCollaboratorTemplate);

    const aoCriarColaborador = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        dispatch(createCollaborator({
            nome: colaborador.nome,
            cargo: colaborador.cargo,
            imagem: colaborador.imagem,
            dataDeEntrada: colaborador.dataDeEntrada,
            timeSelecionado: colaborador.timeSelecionado,
        }))
        dispatch(resetCollaboratorsInput())
    }

    const aoCriarTime = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        dispatch(addTeam({
            name: inputTeamName,
            color: inputTeamColor
        }))
        dispatch(resetTeamInput())
    }

    return (
        <section className="form_container">
            <form onSubmit={aoCriarColaborador}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Field
                    aoAlterado={valor => dispatch(setCollaboratorName(valor))}
                    required
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={colaborador.nome}
                />
                <Field
                    aoAlterado={valor => dispatch(setCollaboratorOffice(valor))}
                    required
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={colaborador.cargo}
                />
                <Field
                    aoAlterado={valor => dispatch(setCollaboratorImage(valor))}
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={colaborador.imagem}
                />
                <Field
                    aoAlterado={valor => dispatch(setCollaboratorDate(valor))}
                    required
                    label="Data de Entrada"
                    placeholder='dd/mm/aaaa'
                    value={colaborador.dataDeEntrada}
                    type="date"
                />
                <ListModel
                    aoAlterado={valor => dispatch(setCollaboratorTeam(valor))}
                    required
                    label="Time"
                    itens={times.map(time => time.name)}
                    value={colaborador.timeSelecionado}
                />
                <Button>Criar card</Button>
            </form>
            <form onSubmit={aoCriarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Field
                    aoAlterado={valor => dispatch(setTeamName(valor))}
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={inputTeamName}
                />
                <Field
                    aoAlterado={valor => dispatch(setTeamColor(valor))}
                    required
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={inputTeamColor}
                    type="color"
                />
                <Button>Criar um novo time</Button>
            </form>
        </section>
    )
}

export default Form