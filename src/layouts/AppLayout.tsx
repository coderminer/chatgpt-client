import React from 'react'
import Header from './Header';
import Footer from './Footer';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className=" bg-indigo-500 flex-1">
        { children }
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout