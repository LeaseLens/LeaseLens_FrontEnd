import { ReactNode } from "react";

export interface BannerProps {
    bannerTxt: string;
    onClick?: () => void;
}

export interface ProProps {
    width?: string;
    height?: string;
}

export interface SearchProps {
    searchOpt: string;
}

export interface PostTableProps {
    fontSize?: string;
    isAdmin?: boolean;
    thTxt?: string;
    thBtn?: ReactNode;
}

export interface GreenBtnProps {
    greenBtn_txt: string;
    width?: string;
    height?: string;
}

export interface RevProps {
    width?: string;
    height?: string;
}

export interface LoginProps {
    onClose?: () => void;
}