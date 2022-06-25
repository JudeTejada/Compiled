import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Page } from '@/lib/types';

import { Sidebar, Container, Header } from '@/components/index';

interface PageProps {
  pages: Page[];
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <RecoilRoot>
      <Sidebar />
      <main className="flex min-h-screen">
        <Container>
          <Header />

          {/* @ts-ignore */}
          <Component {...pageProps} />
        </Container>
      </main>
    </RecoilRoot>
  );
}

export default MyApp;
