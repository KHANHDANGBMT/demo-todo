"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const Show = (props) => {
    let when = null;
    let otherwise = null;
    react_1.Children.forEach(props.children, (children) => {
        if (children.props.isTrue === undefined) {
            otherwise = children;
        }
        else if (!when && children.props.isTrue === true) {
            when = children;
        }
    });
    return when || otherwise;
};
Show.When = ({ isTrue, children }) => isTrue && children;
Show.Else = ({ render, children }) => render || children;
exports.default = Show;
