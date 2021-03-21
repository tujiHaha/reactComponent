import React, { useContext } from 'react'
import classNames from 'classnames'

import { MenuContext } from './Menu'
export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    index,
    disabled,
    style,
    className,
    children
  } = props;

  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-disable': disabled,
    'is-active': context.index === index
  })
  const handleClick = (e:React.MouseEvent) => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      e.preventDefault()
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>{children}</li>
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem

