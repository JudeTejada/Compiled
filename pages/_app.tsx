import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Page } from '@/lib/types';

import { Sidebar, Container, Header } from '@/components';

interface PageProps {
  pages: Page[];
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <>
      <Sidebar />
      <main className="flex min-h-screen">
        <Container>
          <Header />

          {/* @ts-ignore */}
          <Component {...pageProps} />
        </Container>
      </main>
    </>
  );
}

export default MyApp;
