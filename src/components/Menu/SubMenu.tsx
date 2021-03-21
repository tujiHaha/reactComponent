import React, { FunctionComponentElement, useContext, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'
export interface SubMenuProps {
  index?: string,
  title: string,
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {
    index = '0',
    title,
    children,
    className
  } = props
  // context
  const context = useContext(MenuContext)

  // state
  const [menuOpen, setOpen] = useState(false)
  const classes = classNames(className, {
    'is-active': context.index.indexOf(index) === 0,
    'submenu-item-vertical': context.mode === 'vertical',
    'submenu-item-horizontal': context.mode !== 'vertical'
  })
  const renderChildren = () => {
    const childComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}` })
      } else {
        console.error('SubMenu need a child MenuItem')
      }
    })
    const classNameVar = classNames('viking-submenu', {
      'menu-open': menuOpen
    })
    return (
      <ul className={classNameVar}>
        {childComponent}
      </ul>
    )
  }


  // 点击事件
  const clickEvent = {
    onClick: (e: React.MouseEvent) => {
      e.preventDefault()
      if (context.mode === 'vertical') {
        setOpen(!menuOpen)
      }
    }
  }
  return (
    <li className={classes}>
      <div className='submenu-title' {...clickEvent}>{title}</div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu


