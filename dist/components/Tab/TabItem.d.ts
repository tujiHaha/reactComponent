import React from 'react';
export interface TabItemProps {
    label: string;
    index?: number;
    className?: string;
    style?: React.CSSProperties;
    isDisabled?: boolean;
}
declare const TabItem: React.FC<TabItemProps>;
export default TabItem;
