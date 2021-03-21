import React, { useState } from 'react';
import classNames from 'classnames';
var Tab = function (props) {
    var children = props.children, _a = props.defaultIndex, defaultIndex = _a === void 0 ? 0 : _a, className = props.className, style = props.style, onSelect = props.onSelect;
    var _b = useState(defaultIndex), activeIndex = _b[0], setActiveIndex = _b[1];
    var renderLinks = function () {
        return React.Children.map(children, function (child, i) {
            var classes = classNames('tab-link-item', {
                'active': activeIndex === i
            });
            var childElement = child;
            var _a = childElement.props, label = _a.label, isDisabled = _a.isDisabled;
            return (React.createElement("li", { className: classes, onClick: function (e) {
                    e.preventDefault();
                    if (isDisabled) {
                        return;
                    }
                    setActiveIndex(i);
                    onSelect && onSelect(e, i);
                } }, label));
        });
    };
    var renderContent = function () {
        return React.Children.map(children, function (child, index) {
            if (index === activeIndex) {
                return child;
            }
        });
    };
    var classWarp = classNames(className, "tab-wrap");
    return (React.createElement("div", { className: classWarp, style: style },
        React.createElement("ul", { className: "tab-link-bar" }, renderLinks()),
        renderContent()));
};
export default Tab;
Tab.defaultProps = {
    defaultIndex: 0
};
