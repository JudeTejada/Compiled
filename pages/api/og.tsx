import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};


// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has('title');
  const hasDescription = searchParams.has('description');
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'Compiled';

  const description = hasDescription
    ? searchParams.get('description')?.slice(0, 100)
    : 'A compiled resource for everyday needs of web developers.';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          background: '#7048EC',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <div tw=' flex flex-col  items-center  text-center'>
          <h2 tw='text-9xl font-black mb-5'>{title}</h2>
          <p tw='text-2xl'> {description}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  );
}
