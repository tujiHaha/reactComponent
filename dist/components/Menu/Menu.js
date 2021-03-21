import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({
    index: '0',
});
var Menu = function (props) {
    var _a = props.defaultIndex, defaultIndex = _a === void 0 ? '0' : _a, className = props.className, mode = props.mode, style = props.style, onSelect = props.onSelect, children = props.children;
    var _b = useState(defaultIndex), currentActive = _b[0], setActive = _b[1];
    var classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, { index: "" + index });
            }
            else {
                console.error('Menu need a child MenuItem');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal'
};
export default Menu;
