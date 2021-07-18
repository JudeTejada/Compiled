import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Sidebar, Container, Header } from '@/components/index';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Sidebar />
      <main className='flex min-h-screen'>
        <Container>
          <Header />

          <Component {...pageProps} />
        </Container>
      </main>
    </RecoilRoot>
  );
}
export default MyApp;
