import React, { ReactNode } from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

function Button(props: ButtonProps) {
  const { onClick, children } = props;
  return (
    <button
      data-testid="click-test"
      className="p-2 bg-black text-white rounded-md"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
