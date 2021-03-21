import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, style = props.style, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disable': disabled,
        'is-active': context.index === index
    });
    var handleClick = function (e) {
        if (context.onSelect && !disabled && typeof index === 'string') {
            e.preventDefault();
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = 'MenuItem';
export default MenuItem;
