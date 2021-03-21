

import { FC } from 'react'
import Tab, { TabProps } from './Tab'
import TabItem, { TabItemProps } from './TabItem'

export type ITabComponent = FC<TabProps> & {
  Item: FC<TabItemProps>
}
const TransTab = Tab as ITabComponent
TransTab.Item = TabItem
export default TransTab

