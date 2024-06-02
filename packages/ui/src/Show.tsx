import { Children } from "react";

const Show = (props: any) => {
  let when: any = null;
  let otherwise = null;
  Children.forEach(props.children, (children) => {
    if (children.props.isTrue === undefined) {
      otherwise = children;
    } else if (!when && children.props.isTrue === true) {
      when = children;
    }
  });
  return when || otherwise;
};

Show.When = ({ isTrue, children }: { isTrue: boolean; children: any }) =>
  isTrue && children;
Show.Else = ({ render, children }: any) => render || children;

export default Show;
