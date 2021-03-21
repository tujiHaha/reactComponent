import React from 'react'
import classNames from 'classnames'
type ButtonSize = 'lg' | 'sm';
type ButtonType= 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type NativeAuchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & NativeAuchorProps>
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a
        {...restProps}
        className={classes}
        href={href}>
        {children}</a>
    )
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}
Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button