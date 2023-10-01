import { useState } from "react";
import Banner from "./components/Banner"
import Form from "./components/Form";
import "./base.css";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';
import "./full-reset.css";
import { IColaborador } from "./shared/interfaces/IColaborador";
import { ITime } from "./shared/interfaces/ITime";


function App() {

  let predefido = [
    {
      id: uuidv4(),
      nome: "Marcos Paulo",
      cargo: "Chefe",
      imagem: "https://github.com/m4rcosz.png",
      timeSelecionado: "Programação",
      favoritado: false,
      dataDeEntrada: new Date("01-03-2000").toLocaleDateString()
    },
    {
      id: uuidv4(),
      nome: "Marcos Paulo",
      cargo: "Chefe",
      imagem: "https://github.com/m4rcosz.png",
      timeSelecionado: "Mobile",
      favoritado: false,
      dataDeEntrada: new Date("01-03-2000").toLocaleDateString()
    },
    {
      id: uuidv4(),
      nome: "Marcos Paulo",
      cargo: "Chefe",
      imagem: "https://github.com/m4rcosz.png",
      timeSelecionado: "Front End",
      favoritado: false,
      dataDeEntrada: new Date("01-03-2000").toLocaleDateString()
    },
    {
      id: uuidv4(),
      nome: "Marcos Paulo",
      cargo: "Chefe",
      imagem: "https://github.com/m4rcosz.png",
      timeSelecionado: "Front End",
      favoritado: false,
      dataDeEntrada: new Date("01-03-2000").toLocaleDateString()
    }
  ]


  const [colaboradores, setColaboradores] = useState<IColaborador[]>(predefido);

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    }
  ])

  const aoNovoColaborarAdicionado = (colaborador: IColaborador) =>
    setColaboradores([...colaboradores, colaborador]);


  const deletarColaborador = (id: string) =>
    setColaboradores(colaboradores.filter(col => col.id !== id));

  const mudarCorDoTime = (cor: string, id: string) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  const h1Estilo = { margin: "3rem auto", fontSize: "clamp(2rem, 3.5vw, 4rem)", borderBottom: "4px solid #6278F7", display: "inline-block", color: "#6278F7", paddingBottom: "1rem" }

  const cadastrarTime = (novoTime: ITime) =>
    setTimes([...times, { ...novoTime }])

  const resolverFavorito = (id: string) => {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favoritado = !colaborador.favoritado;
      return colaborador
    }))
  }


  return (
    <>
      <Banner
        enderecoImagem="images/banner.png"
        textoAlternativo="imagem do banner principal"
      />
      <Form
        aoColaboradorCadastrado={aoNovoColaborarAdicionado}
        times={times.map(e => { return e.nome })}
        cadastrarTime={cadastrarTime}
      />
      <section className="times" style={{ display: "flex", flexDirection: "column", maxWidth: "100%" }}>
        <h1 style={h1Estilo}>
          Minha Organização
        </h1>
        {times.map(time => <Team
          key={time.id}
          name={time.nome}
          cor={time.cor}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.timeSelecionado === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        />)}
      </section >
      <Footer />
    </>
  )
}

export default App