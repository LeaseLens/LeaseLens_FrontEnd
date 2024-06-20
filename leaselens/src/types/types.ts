export interface BannerProps {
    bannerTxt: string;
    onClick?: () => void;
}

export interface ProProps {
    width: string;
    height: string;
}

export interface SearchProps {
    searchOpt: string;
}

export interface PostTableProps {
    fontSize?: string;
    isAdmin?: boolean;
}

export interface GreenBtnProps {
    greenBtn_txt: string;
    width?: string;
    height?: string;
}