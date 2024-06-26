import { ReactNode } from "react";
import { ProddbProps } from "./productstypes";

export interface BannerProps {
    bannerTxt: string;
    onClick?: () => void;
}

export interface ProProps {
    width?: string;
    height?: string;
    prod_idx?: number;
    product?: ProddbProps;
}

export interface SearchProps {
    searchOpt: string;
}

export interface PostTableProps {
    fontSize?: string;
    isAdmin?: boolean;
    thTxt?: string;
    thBtn?: ReactNode;
    rev_idx?: number;
}

export interface GreenBtnProps {
    greenBtn_txt: string;
    width?: string;
    height?: string;
}

export interface RevProps {
    width?: string;
    height?: string;
    rev_idx?: number;
    rev_img?: string;
}

export interface LoginProps {
    onClose?: () => void;
}

export interface SidebarProps {
    getProds: (category: String) => void;
}