import NextLink from 'next/link';

interface ButtonProps {
  type: string;
  className?: string;
  disabled?: boolean;
}

interface ButtonLinkProps extends ButtonProps {
  href: string;
}

const ButtonSwitchStyles = (type: string, disabled?: boolean) => {
  const baseStyles = `outline-none cursor-pointer text-base px-3 py-3 ${
    disabled && 'cursor-not-allowed bg-secondaryLight '
  }`;

  switch (type) {
    case 'primary':
      return ` font-semibold rounded-md  text-white  bg-purple hover:bg-purpleLight focus-visible:bg-purpleLight  ${baseStyles}  `;

    default: {
      throw new Error('variant not supported for that');
    }
  }
};

export const Button = ({
  children,
  className,
  type,
  disabled
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={` ${ButtonSwitchStyles(type, disabled)} ${className} `}
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
      <button className={` ${ButtonSwitchStyles(type)} ${className}`}>
        {children}
      </button>
    </NextLink>
  );
};
