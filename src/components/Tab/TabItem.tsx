import React from 'react'

import classNames from 'classnames'
export interface TabItemProps {
  label: string,
  index?: number,
  className?: string,
  style?: React.CSSProperties,
  isDisabled?: boolean
}

const TabItem: React.FC<TabItemProps> = (props) => {
  const {
    children,
    className,
    style
  } = props
  const classes = classNames('tab-content-panel', className)
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}
export default TabItem