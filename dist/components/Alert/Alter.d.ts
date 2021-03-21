import React from 'react';
declare type AlertType = 'success' | 'default' | 'warning' | 'danger';
interface BaseAlertProps {
    title?: string;
    isAbleClose?: boolean;
    alertType?: AlertType;
}
declare type AlertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
