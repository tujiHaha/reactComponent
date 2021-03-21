import React, { useState } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './TabItem'
export interface TabProps {
  className?: string,
  style?: React.CSSProperties;
  onSelect?: (e: React.MouseEvent, currentIndex: number) => void,
  defaultIndex?: number,

}
const Tab: React.FC<TabProps> = (props) => {
  const {
    children,
    defaultIndex = 0,
    className,
    style,
    onSelect
  } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const renderLinks = () => {
    return React.Children.map(children, (child, i) => {
      const classes = classNames('tab-link-item', {
        'active': activeIndex === i
      })
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { label, isDisabled } = childElement.props
      return (<li className={classes} onClick={
        (e: React.MouseEvent) => {
          e.preventDefault()
          if (isDisabled) {
            return
          }
          setActiveIndex(i)
          onSelect && onSelect(e, i)
        }
      }>{label}</li>)
    })
  }
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child
      }
    })
  }
  const classWarp = classNames(className, "tab-wrap")
  return (
    <div className={classWarp} style={style}>
      <ul className="tab-link-bar">{renderLinks()}</ul>
      {renderContent()}
    </div>
  )
}

export default Tab

Tab.defaultProps = {
  defaultIndex: 0
}