import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Sidebar } from '@/components/index';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Sidebar />
      <main className='flex min-h-screen'>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
export default MyApp;
