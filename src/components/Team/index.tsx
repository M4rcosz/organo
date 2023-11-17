import { IColaborador } from "@/shared/interfaces/IColaborador";
import { ITeam } from "@/shared/interfaces/ITeam";
import Colaborador from "@/components/Colaborador";
import "./Team.css";
import hexToRgba from "hex-to-rgba";
import { useAppDispatch } from "@/hooks/redux";
import { onChangeTeamColor } from "@/store/reducer/teams";

interface TeamProps {
    time: ITeam
    colaboradores: IColaborador[]
}


const Team = ({ time, colaboradores }: TeamProps) => {


    const dispatch = useAppDispatch();

    const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onChangeTeamColor(
            {
                id: time.id,
                color: event.target.value
            }
        ))
    }

    return (
        colaboradores.length > 0 &&
        <>

            <section className="team" style={{ backgroundColor: hexToRgba(time.color, 0.44) }}>
                <input
                    style={{ cursor: "pointer" }}
                    onChange={evento => changeColor(evento)}
                    type="color" className="inputColor" value={time.color}
                />
                <h3 style={{ borderColor: time.color }}>
                    {time.name}
                </h3>
                <div className="colaboradores">
                    {colaboradores.map(colaborador => <Colaborador
                        key={colaborador.id}
                        cor={time.color}
                        colaborador={colaborador}

                    />)}
                </div>
            </section>
        </>
    )
}

export default Team