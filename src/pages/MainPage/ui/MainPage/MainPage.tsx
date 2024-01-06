import React, { FC, ReactNode } from 'react';
import cls from "./MainPage.module.scss";

interface MainPageProps {
  className?: string;
  children?: ReactNode;
}

export const MainPage = (props: MainPageProps) => {
  const { className='', children } = props;
  return (
  <div className={cls.MainPage}>
    {children}
  </div>
  );
};
