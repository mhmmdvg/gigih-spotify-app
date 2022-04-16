import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  const { children, onClick } = props;
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}