import { FC } from 'react';
import { TabProps } from './Tab';
import { TabItemProps } from './TabItem';
export declare type ITabComponent = FC<TabProps> & {
    Item: FC<TabItemProps>;
};
declare const TransTab: ITabComponent;
export default TransTab;
