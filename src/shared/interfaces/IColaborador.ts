import { UUID } from "crypto"

export interface IColaborador {
    id: UUID | string
    nome: string
    cargo: string
    imagem: string
    timeSelecionado: string
    favoritado: boolean
    dataDeEntrada: string
}

