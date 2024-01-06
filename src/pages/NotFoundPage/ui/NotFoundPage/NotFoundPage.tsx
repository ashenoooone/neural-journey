import React, { FC, ReactNode } from 'react';
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
  children?: ReactNode;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className='', children } = props;
  return (
  <div className={cls.NotFoundPage}>
    {children}
  </div>
  );
};
