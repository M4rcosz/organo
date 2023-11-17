import type { ICreateCollaborator, IDeleteCollaborator, IInitialStateType, IToogleFavorite } from "@/shared/interfaces/payload/ICollaborator";
import { PayloadString } from "@/shared/interfaces/payload/shortsType";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState: IInitialStateType = {
    collaborators: [
        {
            id: "CHEFE",
            nome: "Marcos",
            cargo: "",
            imagem: "",
            dataDeEntrada: "",
            timeSelecionado: "Mobile",
            favoritado: false
        },
    ],
    createCollaboratorTemplate: {
        nome: "",
        cargo: "",
        imagem: "",
        timeSelecionado: "",
        dataDeEntrada: "",
    }
}

const collaboratorSlice = createSlice({
    name: "collaboratorSlice",
    initialState,
    reducers: {
        setCollaboratorName: (state, { payload }: PayloadString) => void
            (state.createCollaboratorTemplate.nome = payload),
        setCollaboratorOffice: (state, { payload }: PayloadString) => void
            (state.createCollaboratorTemplate.cargo = payload),
        setCollaboratorImage: (state, { payload }: PayloadString) => void
            (state.createCollaboratorTemplate.imagem = payload),
        setCollaboratorTeam: (state, { payload }: PayloadString) => void
            (state.createCollaboratorTemplate.timeSelecionado = payload),
        setCollaboratorDate: (state, { payload }: PayloadString) => void
            (state.createCollaboratorTemplate.dataDeEntrada = payload),

        createCollaborator: (state, { payload }: ICreateCollaborator) => void
            (state.collaborators = [...state.collaborators, { id: uuidv4(), ...payload, favoritado: false }]),
        deleteCollaborator: (state, { payload }: IDeleteCollaborator) => void
            (state.collaborators = state.collaborators.filter(collaborator => collaborator.id != payload)),
        toogleFavorite: (state, { payload }: IToogleFavorite) => {
            state.collaborators.map(collaborator => {
                if (collaborator.id === payload) collaborator.favoritado = !collaborator.favoritado;
            })
        },
        resetCollaboratorsInput: state => {
            state.createCollaboratorTemplate = {
                nome: "",
                cargo: "",
                imagem: "",
                timeSelecionado: "",
                dataDeEntrada: "",
            }
        }
    }
})

export const {
    setCollaboratorName,
    setCollaboratorOffice,
    setCollaboratorImage,
    setCollaboratorTeam,
    setCollaboratorDate,
    createCollaborator,
    deleteCollaborator,
    toogleFavorite,
    resetCollaboratorsInput
} = collaboratorSlice.actions;

export const collaboratorSliceReducer = collaboratorSlice.reducer;