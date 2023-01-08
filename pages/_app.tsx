import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Page } from '@/lib/types';

import { Sidebar, Container, Header } from '@/components/index';
import { Inter } from '@next/font/google';

const inter = Inter();

interface PageProps {
  pages: Page[];
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <RecoilRoot>
      <div className={inter.className}>
        <Sidebar />
        <main className='flex min-h-screen'>
          <Container>
            <Header />

            <Component {...pageProps} />
          </Container>
        </main>
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
