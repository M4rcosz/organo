import type { IColaborador } from "../IColaborador"

export interface IInitialStateType {
    collaborators: IColaborador[],
    createCollaboratorTemplate: {
        nome: string
        cargo: string
        imagem: string
        timeSelecionado: string
        dataDeEntrada: string
    }
}

export interface ICreateCollaborator {
    payload: {
        nome: string
        cargo: string
        imagem: string
        timeSelecionado: string
        dataDeEntrada: string
    }
}

export interface IDeleteCollaborator {
    payload: string
}

export interface IToogleFavorite {
    payload: string
}