import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Page } from '@/lib/types';

import { Sidebar, Container, Header, Button } from '@/components/index';
import { Inter } from '@next/font/google';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useScrollToBottom } from '@/hooks/use-scroll-to-bottom';
import { useRef } from 'react';

const inter = Inter();

interface PageProps {
  pages: Page[];
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const mainRef = useRef<HTMLElement>(null);

  const reachedBottom = useScrollToBottom({
    customHeight:
      typeof window !== 'undefined' ? document.body.offsetHeight / 2 : 500
  });

  return (
    <RecoilRoot>
      <div className={inter.className}>
        <Sidebar />
        <main className='flex min-h-screen relative' ref={mainRef}>
          <Container>
            <Header />

            <Component {...pageProps} />

            {reachedBottom && (
              <Button
                type='primary'
                className='rounded-full fixed right-5 bottom-5  w-12 shadow-xl'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <ChevronUpIcon />
              </Button>
            )}
          </Container>
        </main>
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
