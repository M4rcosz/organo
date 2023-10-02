import { useState } from "react";
import Button from "../Button";
import ListModel from "../ListModel";
import Field from "../Field";
import "./Form.css";
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";

interface FormProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
    cadastrarTime: (novoTime: ITime) => void
}

const Form = ({ aoColaboradorCadastrado, times, cadastrarTime }: FormProps) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [dataDeEntrada, setDataDeEntrada] = useState("")
    const [timeSelecionado, setTimeSelecionado] = useState("");
    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("#f2f2a2");

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoColaboradorCadastrado({ id: uuidv4(), nome, cargo, imagem, timeSelecionado, favoritado: false, dataDeEntrada });
        setNome('')
        setCargo('')
        setImagem('')
        setTimeSelecionado('')
        setDataDeEntrada('')
    }

    return (
        <section className="form_container">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Field
                    required
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Field
                    required
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Field
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Field
                    required
                    label="Data de Entrada"
                    placeholder='dd/mm/aaaa'
                    value={dataDeEntrada}
                    aoAlterado={valor => setDataDeEntrada(valor)}
                    type="date"
                />
                <ListModel
                    required
                    label="Time"
                    itens={times}
                    value={timeSelecionado}
                    aoAlterado={valor => setTimeSelecionado(valor)}
                />
                <Button>Criar card</Button>
            </form>
            <form onSubmit={(evt) => {
                evt.preventDefault();
                cadastrarTime({ id: uuidv4(), nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Field
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Field
                    type="color"
                    required
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Button>Criar um novo time</Button>
            </form>
        </section>
    )
}

export default Form