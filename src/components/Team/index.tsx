import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";
import Colaborador from "../Colaborador";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

interface TeamProps {
    name: string
    cor: string
    time: ITime
    colaboradores: IColaborador[]
    aoDeletar: (id: string) => void
    mudarCor: (cor: string, id: string) => object | void
    aoFavoritar: (id: string) => object | void
}

const h1Estilo = { margin: "3rem auto", fontSize: "clamp(2rem, 3.5vw, 4rem)", borderBottom: "4px solid #6278F7", display: "inline-block", color: "#6278F7", paddingBottom: "1rem" }

const Team = ({ name, cor, time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TeamProps) => {
    return (
        colaboradores.length > 0 &&
        <>
            <h1 style={h1Estilo}>
                Minha Organização
            </h1>
            <section className="team" style={{ backgroundColor: hexToRgba(cor, 0.44) }}>
                <input
                    style={{ cursor: "pointer" }}
                    onChange={evento => mudarCor(evento.target.value, time.id)}
                    type="color" className="inputColor" value={cor}
                />
                <h3 style={{ borderColor: cor }}>
                    {name}
                </h3>
                <div className="colaboradores">
                    {colaboradores.map(colaborador => <Colaborador
                        key={colaborador.id}
                        cor={cor}
                        aoDeletar={aoDeletar}
                        colaborador={colaborador}
                        aoFavoritar={aoFavoritar}
                    />)}
                </div>
            </section>
        </>
    )
}

export default Team