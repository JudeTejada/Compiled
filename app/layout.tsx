'use client';

import './globals.css';
import { RecoilRoot } from 'recoil';

import { Sidebar, Container, Header, Button } from 'app/components';
import { Inter } from 'next/font/google';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { useScrollToBottom } from 'hooks';
import { type ReactNode, useRef, Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

function MyApp(props: { children: ReactNode }) {
  const { children } = props;
  const mainRef = useRef<HTMLElement>(null);

  const reachedBottom = useScrollToBottom({
    customHeight:
      typeof window !== 'undefined' ? document.body.offsetHeight / 2 : 500
  });

  return (
    <html>
      <head></head>
      <body className={inter.className}>
        <RecoilRoot>
          <Sidebar />
          <main className='flex min-h-screen relative' ref={mainRef}>
            <Container>
              <Header />
              <Suspense fallback={<h1>Loading</h1>}>{children}</Suspense>
            </Container>
          </main>
        </RecoilRoot>
      </body>
    </html>
  );
}

export default MyApp;
