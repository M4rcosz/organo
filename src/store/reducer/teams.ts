import { v4 as uuidv4 } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadString } from '@/shared/interfaces/payload/shortsType';
import type { IChangeTeamColor, ICreateTeam, IInitialState } from '@/shared/interfaces/payload/ITeam';

const teams = [
    {
        id: uuidv4(),
        name: "Programação",
        color: "#57C278",
    },
    {
        id: uuidv4(),
        name: "Front End",
        color: "#82CFFA",
    },
    {
        id: uuidv4(),
        name: "Data Science",
        color: "#A6D157",
    },
    {
        id: uuidv4(),
        name: "Devops",
        color: "#E06B69",
    },
    {
        id: uuidv4(),
        name: "UX e Design",
        color: "#DB6EBF",
    },
    {
        id: uuidv4(),
        name: "Mobile",
        color: "#FFBA05",
    },
    {
        id: uuidv4(),
        name: "Inovação e Gestão",
        color: "#FF8A29",
    }
]

const initialState: IInitialState = {
    teams,
    createTeamTemplate: {
        id: uuidv4(),
        teamName: "",
        teamColor: "#FF0000"
    }
}

export const teamSlice = createSlice({
    name: "teamSlice",
    initialState,
    reducers: {
        setTeamName: (state, { payload }: PayloadString) => void
            (state.createTeamTemplate.teamName = payload),

        setTeamColor: (state, { payload }: PayloadString) => void
            (state.createTeamTemplate.teamColor = payload),
        addTeam: (state, { payload }: ICreateTeam) => {
            state.teams = [
                ...state.teams,
                {
                    id: uuidv4(),
                    ...payload
                }]
        },
        onChangeTeamColor: (state, { payload }: IChangeTeamColor) => {
            state.teams.map(team => {
                if (team.id === payload.id) {
                    team.color = payload.color
                }
            })
        },
        resetTeamInput: state => {
            state.createTeamTemplate = {
                ...state.createTeamTemplate,
                teamName: "",
                teamColor: ""
            }
        }
    }
})

export const { setTeamColor, setTeamName, addTeam, onChangeTeamColor, resetTeamInput } = teamSlice.actions;

export const teamSliceReducer = teamSlice.reducer;

