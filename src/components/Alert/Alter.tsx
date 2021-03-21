import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
type AlertType = 'success' | 'default' | 'warning' | 'danger'

interface BaseAlertProps {
  title?: string;
  isAbleClose?: boolean;
  alertType?: AlertType
}
type AlertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>
const Alert: React.FC<AlertProps> = (props) => {
  const {
    title,
    isAbleClose,
    children,
    className,
    alertType,
    ...restProps
  } = props
  const classes = classNames('alert-wrap', className, {
    [`alert-${alertType}`]: alertType,
  })
  const [isShow, setIsShow] = useState(true)
  if (!isShow) {
    return null
  }
  const jsxDom = (
    <div className={classes} {...restProps}>
      <div className="alert-content">
        {title && <h6 className='title'>{title}</h6>}
        {isAbleClose && <span className="close" onClick={() => setIsShow(false)}>关闭</span>}
        <div className="content">{children}</div>
      </div>
    </div>
  )
  return ReactDOM.createPortal(
    jsxDom,
    document.body
  );
}
export default Alert
Alert.defaultProps = {
  isAbleClose: true,
  alertType: 'default'
}