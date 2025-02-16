import { ReactElement } from "react";

export type TNavItems = {
    name: string;
    link: string;
};

export type TStatsCard = {
    label: string;
    description: string;
}

export type TProcessItem = {
    title: string;
    duration: string;
    description: string;
    customList: string[];
};

export type TSocialsLinks = {
    name: string;
    href: string;
    icon: ReactElement;
}

export type TProject = {
    title: string;
    description: string;
    link: string;
    image: string;
    tags: string[];
    techStack: string[];
}