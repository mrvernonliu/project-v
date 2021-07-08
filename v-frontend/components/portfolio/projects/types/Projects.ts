import {TechStack} from "../../experiences/types/TechStack";

export interface Projects {
    id: number,
    name: string,
    description: string,
    techStack: TechStack[]
}