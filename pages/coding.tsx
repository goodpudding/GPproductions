import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Coding: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coding Projects</title>
        <meta name="description" content="A showcase of my coding projects." />
      </Head>
      
      <Navbar />
      
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Coding Projects</h1>
        <p className="mt-4">Here are some of the coding projects I've worked on:</p>
        
        {/* List or showcase coding projects here */}
      </main>
    </div>
  );
};

export default Coding;
