import type { ITeam } from "@/shared/interfaces/ITeam";

export interface IInitialState {
    teams: ITeam[],
    createTeamTemplate: {
        id: string;
        teamName: string;
        teamColor: string;
    }
}

export interface ICreateTeam {
    payload: {
        name: string;
        color: string;
    }
}

export interface IChangeTeamColor {
    payload: {
        id: string,
        color: string
    }
}