var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
var SubMenu = function (props) {
    var _a = props.index, index = _a === void 0 ? '0' : _a, title = props.title, children = props.children, className = props.className;
    // context
    var context = useContext(MenuContext);
    // state
    var _b = useState(false), menuOpen = _b[0], setOpen = _b[1];
    var classes = classNames(className, {
        'is-active': context.index.indexOf(index) === 0,
        'submenu-item-vertical': context.mode === 'vertical',
        'submenu-item-horizontal': context.mode !== 'vertical'
    });
    var renderChildren = function () {
        var childComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: index + "-" + i });
            }
            else {
                console.error('SubMenu need a child MenuItem');
            }
        });
        var classNameVar = classNames('viking-submenu', {
            'menu-open': menuOpen
        });
        return (React.createElement("ul", { className: classNameVar }, childComponent));
    };
    // 点击事件
    var clickEvent = {
        onClick: function (e) {
            e.preventDefault();
            if (context.mode === 'vertical') {
                setOpen(!menuOpen);
            }
        }
    };
    return (React.createElement("li", { className: classes },
        React.createElement("div", __assign({ className: 'submenu-title' }, clickEvent), title),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
