import { UUID } from "crypto"

export interface ITeam {
    id: UUID | string
    name: string
    color: string
}

