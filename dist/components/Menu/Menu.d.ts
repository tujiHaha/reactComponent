import React from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
declare type SelectCallBack = (selectedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallBack;
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallBack;
    mode?: MenuMode;
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
