import { v4 as uuidv4 } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";

interface ITeam {
    id: string
    name: string
    color: string
}

interface IInitialState {
    teams: ITeam[]
    createTeamTemplate: {
        id: string
        teamName: string
        teamColor: string
    }
}

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
        setTeamName: (state, { payload }: { payload: string }) => {
            state.createTeamTemplate.teamName = payload
        },

        setTeamColor: (state, { payload }: { payload: string }) => {
            state.createTeamTemplate.teamColor = payload
        },
        createTeam: (state, { payload }: { payload: { name: string; color: string } }) => {
            state.teams = [
                ...state.teams,
                {
                    id: uuidv4(),
                    ...payload
                }]
        },
        onChangeTeamColor: (state, { payload }: { payload: { id: string; color: string } }) => {
            state.teams.map(team => {
                if (team.id === payload.id) {
                    team.color = payload.color
                }
            })
        },
    }
})

export const { setTeamColor, setTeamName, createTeam, onChangeTeamColor } = teamSlice.actions;

export const teamSliceReducer = teamSlice.reducer;

