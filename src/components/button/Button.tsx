import React, { ReactNode } from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

function Button(props: ButtonProps) {
  const { onClick, children } = props;
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
