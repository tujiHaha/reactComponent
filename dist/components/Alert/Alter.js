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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
var Alert = function (props) {
    var _a;
    var title = props.title, isAbleClose = props.isAbleClose, children = props.children, className = props.className, alertType = props.alertType, restProps = __rest(props, ["title", "isAbleClose", "children", "className", "alertType"]);
    var classes = classNames('alert-wrap', className, (_a = {},
        _a["alert-" + alertType] = alertType,
        _a));
    var _b = useState(true), isShow = _b[0], setIsShow = _b[1];
    if (!isShow) {
        return null;
    }
    var jsxDom = (React.createElement("div", __assign({ className: classes }, restProps),
        React.createElement("div", { className: "alert-content" },
            title && React.createElement("h6", { className: 'title' }, title),
            isAbleClose && React.createElement("span", { className: "close", onClick: function () { return setIsShow(false); } }, "\u5173\u95ED"),
            React.createElement("div", { className: "content" }, children))));
    return ReactDOM.createPortal(jsxDom, document.body);
};
export default Alert;
Alert.defaultProps = {
    isAbleClose: true,
    alertType: 'default'
};
