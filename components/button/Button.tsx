interface Props {
  type: string;
}

type Variants = 'Primary' | 'Secondary';

const ButtonSwitchStyles = (type: Variants) => {
  const baseStyles = '';

  switch (type) {
    case 'Primary':
      return '';

    default: {
      throw new Error('variant not supported for that');
    }
  }
};

export const Button = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <button
      role='button'
      className='px-3 py-3 text-sm font-semibold rounded-md outline-none cursor-pointer text-whiteite md:text-base bg-purple hover:bg-purpleLight focus-visible:bg-purpleLight'
    >
      {children}
    </button>
  );
};
