import {TechStack} from "./TechStack";

export interface Experience {
    name: string;
    title: string;
    iconUrl: string;
    startDate: Date;
    endDate: Date;
    techStack: TechStack[];
}