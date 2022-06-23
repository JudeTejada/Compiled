import NextLink from 'next/link';
import cls from 'classnames';

interface ButtonProps {
  type: 'primary';
  className?: string;
  disabled?: boolean;
}

interface ButtonLinkProps extends ButtonProps {
  href: string;
}

const defaultStyles = {
  base: 'outline-none cursor-pointer text-base px-3 py-3',
  disabled: 'cursor-not-allowed bg-secondaryLight'
};
const buttonStyles = {
  primary:
    'font-semibold rounded-md  text-white  bg-purple hover:bg-purpleLight focus-visible:bg-purpleLight'
};

export const Button = ({
  children,
  className,
  type,
  disabled
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cls(
        defaultStyles.base,
        buttonStyles[type],
        disabled && defaultStyles.disabled,
        { className }
      )}
      // className={` ${ButtonSwitchStyles(type, disabled)} ${className} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  href,
  className,
  type
}: React.PropsWithChildren<ButtonLinkProps>) => {
  return (
    <NextLink passHref href={href}>
      <button
        className={cls(defaultStyles.base, buttonStyles[type], { className })}
      >
        {children}
      </button>
    </NextLink>
  );
};
