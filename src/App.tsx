import Banner from "@/components/Banner";
import Form from "@/components/Form";
import "@/base.css";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import "@/full-reset.css";
import { useAppSelector } from "@/hooks/redux";


const App = () => {

  const times = useAppSelector(state => state.team.teams);
  const colaboradores = useAppSelector(state => state.membersTeam.collaborators);

  return (
    <>
      <Banner
        enderecoImagem="images/banner.png"
        textoAlternativo="imagem do banner principal"
      />
      <Form />
      <section className="times" style={{ display: "flex", flexDirection: "column", maxWidth: "100%" }}>
        {colaboradores.length > 0 &&
          <h1 className="team_title">
            Minha Organização
          </h1>
        }
        {times.map(time => <Team
          key={time.id}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.timeSelecionado === time.name)}
        />)}
      </section >
      <Footer />
    </>
  )
}

export default App
