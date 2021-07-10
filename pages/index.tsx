import React from 'react';

import { Sidebar } from '@/components/sidebar';
import { Main } from '@/components/main';

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen'>
        <Sidebar />
        <Main />
      </main>
    </>
  );
}
