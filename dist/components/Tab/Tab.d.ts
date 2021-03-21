import React from 'react';
export interface TabProps {
    className?: string;
    style?: React.CSSProperties;
    onSelect?: (e: React.MouseEvent, currentIndex: number) => void;
    defaultIndex?: number;
}
declare const Tab: React.FC<TabProps>;
export default Tab;
