import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import "./Colaborador.css";
import { IColaborador } from "../../shared/interfaces/IColaborador";

interface ColaboradorProps {
    cor: string
    aoDeletar: (id: string) => void
    colaborador: IColaborador
    aoFavoritar: (id: string) => object | void
}

const Colaborador = ({ cor, aoDeletar, colaborador, aoFavoritar }: ColaboradorProps) => {
    const favoritar = () => {
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        style: { fill: cor, cursor: "pointer" },
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                cursor={"pointer"}
                className="deletar"
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className="header" style={{ backgroundColor: cor }}>
                <img
                    src={colaborador.imagem
                        ? colaborador.imagem
                        : "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"}
                    alt={colaborador.nome}
                />
            </div>
            <div className="footer">
                <h4>
                    {colaborador.nome}
                </h4>
                <h5>
                    {colaborador.cargo}
                </h5>
                <h5>
                    {new Date(colaborador.dataDeEntrada).toLocaleDateString()}
                </h5>
                <div className={`favoritar`} >
                    {colaborador.favoritado
                        ? <AiFillHeart {...propsFavorito} />
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Colaborador;