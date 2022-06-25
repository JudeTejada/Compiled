import React from 'react';
import cls from 'classnames';

import { ICONS } from './constants';

interface IconProps {
  icon: 'menu';
  isClickable?: boolean;
  className?: string;
  onClick?: () => void;
}
const styles = {
  base: 'w-5 h-5 text-secondaryLight',
  isClickable: 'focus:ring focus:ring-purpleLight cursor-pointer '
};

export const Icon = ({ icon, isClickable, className, ...props }: IconProps) => {
  const element = ICONS[icon];

  return (
    <button
    tabIndex={0}
      className={cls(styles.base, isClickable && styles.isClickable, className)}
      {...props}
    >
      {element}
    </button>
  );
};
