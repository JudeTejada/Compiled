import NextLink from 'next/link';

interface ButtonProps {
  type: string;
  className?: string;
}

interface ButtonLinkProps extends ButtonProps {
  href: string;
}

const ButtonSwitchStyles = (type: string) => {
  const baseStyles = 'outline-none cursor-pointer text-base px-3 py-3';

  switch (type) {
    case 'primary':
      return `${baseStyles} font-semibold rounded-md  text-white  bg-purple hover:bg-purpleLight focus-visible:bg-purpleLight  `;

    default: {
      throw new Error('variant not supported for that');
    }
  }
};

export const Button = ({
  children,
  className,
  type
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button className={` ${ButtonSwitchStyles(type)} ${className}`}>
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
