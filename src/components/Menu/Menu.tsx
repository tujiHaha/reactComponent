import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './MenuItem'

type MenuMode = 'horizontal' | 'vertical';
type SelectCallBack = (selectedIndex: string) => void

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallBack
}

interface IMenuContext {
  index: string,
  onSelect?: SelectCallBack,
  mode?: MenuMode
}

export const MenuContext = createContext<IMenuContext>({
  index: '0',
})

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex='0',
    className,
    mode,
    style,
    onSelect,
    children
  } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('viking-menu',className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode:mode
  }


  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: `${index}` })
      } else {
        console.error('Menu need a child MenuItem')
      }
    })


  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal'
}

export default Menu


