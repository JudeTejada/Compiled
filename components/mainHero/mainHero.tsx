interface Props {
  title: string;
  description: string;
}

export const MainHero = ({ title, description }: Props) => {
  return (
    <header>
      <h1 className='my-12 text-4xl font-bold md:text-6xl'>{title}</h1>
      <p className='text-base text-secondaryLight'>{description}</p>
    </header>
  );
};
