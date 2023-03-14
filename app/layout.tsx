'use client';

import './globals.css';
import { RecoilRoot } from 'recoil';

import { Sidebar, Container, Header, Button } from 'app/components';
import { Inter } from 'next/font/google';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useScrollToBottom } from 'hooks';
import { type ReactNode, useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

function MyApp(props: { children: ReactNode }) {
  const { children } = props;
  const mainRef = useRef<HTMLElement>(null);

  const reachedBottom = useScrollToBottom({
    customHeight:
      typeof window !== 'undefined' ? document.body.offsetHeight / 2 : 0
  });

  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  return (
    <html>
      <head>
        <meta property='og:image' content={`${baseUrl}/api/og`} />
      </head>
      <body className={inter.className}>
        <RecoilRoot>
          <Sidebar />
          <main className='flex min-h-screen relative' ref={mainRef}>
            <Container>
              <Header />
              {children}
              {reachedBottom && (
                <Button
                  type='primary'
                  className='rounded-full fixed right-5 bottom-5  w-12 shadow-xl'
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  <ChevronUpIcon />
                </Button>
              )}
            </Container>
          </main>
        </RecoilRoot>
      </body>
    </html>
  );
}

export default MyApp;
