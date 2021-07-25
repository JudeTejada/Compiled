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
      className='px-6 py-3 text-white rounded-md outline-none cursor-pointer bg-purple hover:bg-purpleLight focus-visible:bg-purpleLight'
    >
      {children}
    </button>
  );
};
