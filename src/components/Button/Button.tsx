import cn from 'classnames';
import * as React from 'react';

import './Button.module.scss';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

type ButtonProps = {
  children: React.ReactNode;
  onClick: VoidFunction;
  type: ButtonType;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type }: ButtonProps) => {
  const style = cn('button', `button_${type}`);

  return (
    <button styleName={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
