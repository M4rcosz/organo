import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface ICreateCollaborator {
    nome: string;
    cargo: string;
    imagem: string;
    dataDeEntrada: string;
    timeSelecionado: string;
}

interface IInitialState {
    collaborators: {
        id: string;
        nome: string;
        cargo: string;
        imagem: string;
        dataDeEntrada: string;
        timeSelecionado: string;
        favoritado: boolean;
    }[]
}

const initialState: IInitialState = {
    collaborators: [
        {
            id: "1",
            nome: "Marcos",
            cargo: "Boss",
            imagem: "",
            dataDeEntrada: "11/01/2021",
            timeSelecionado: "Mobile",
            favoritado: true
        },
    ],
}

const collaboratorSlice = createSlice({
    name: "collaboratorSlice",
    initialState,
    reducers: {
        createCollaborator: (state, { payload }: { payload: ICreateCollaborator }) => {
            state.collaborators = [...state.collaborators, { id: uuidv4(), ...payload, favoritado: false }]
            console.log(payload)
        },
        deleteCollaborator: (state, { payload }: { payload: string }) => {
            state.collaborators = state.collaborators.filter(collaborator => collaborator.id != payload)
        },
        toogleFavorite: (state, { payload }: { payload: string }) => {
            state.collaborators.map(collaborator => {
                if (collaborator.id === payload) collaborator.favoritado = !collaborator.favoritado;
            })
        },
    }
})

export const {
    createCollaborator,
    deleteCollaborator,
    toogleFavorite,
} = collaboratorSlice.actions;

export const collaboratorSliceReducer = collaboratorSlice.reducer;