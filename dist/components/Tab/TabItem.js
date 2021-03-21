import React from 'react';
import classNames from 'classnames';
var TabItem = function (props) {
    var children = props.children, className = props.className, style = props.style;
    var classes = classNames('tab-content-panel', className);
    return (React.createElement("div", { className: classes, style: style }, children));
};
export default TabItem;
