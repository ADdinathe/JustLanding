import * as React from 'react';

import './Title.module.scss';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLHeadingElement>;

const Title: React.FC<TitleProps> = ({ children, className, ...props }: TitleProps) => (
  <h1 styleName="title" className={className} {...props}>
    {children}
  </h1>
);

export default Title;
