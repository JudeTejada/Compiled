import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge'
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
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
          <h2 tw='text-9xl font-black mb-5'>Compiled</h2>
          <p tw='text-2xl'>
            {' '}
            A compiled resource for everyday needs of web developers.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600
    }
  );
}
