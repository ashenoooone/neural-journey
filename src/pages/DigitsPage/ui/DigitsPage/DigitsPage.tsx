import React, { FC, ReactNode } from 'react';
import cls from "./DigitsPage.module.scss";

interface DigitsPageProps {
  className?: string;
  children?: ReactNode;
}

export const DigitsPage = (props: DigitsPageProps) => {
  const { className='', children } = props;
  return (
  <div className={cls.DigitsPage}>
    {children}
  </div>
  );
};
