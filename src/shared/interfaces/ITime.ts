import { UUID } from "crypto"

export interface ITime {
    id: UUID | string
    nome: string
    cor: string
}
