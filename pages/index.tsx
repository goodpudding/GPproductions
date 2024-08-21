import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Showcasing my coding, multimedia, and crafty makerspace projects." />
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-center py-20 px-4 mt-16">
        <div className="max-w-screen-lg mx-auto">
          {/* Logo - if you have one */}
          <img src="/logo.png" alt="Logo" className="mx-auto mb-6" style={{ maxWidth: '150px' }} />
          
          {/* Tagline */}
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Bringing Creativity to Life Through Code, Media, and Craft
          </h1>
          
          {/* Supporting Text */}
          <p className="text-lg text-gray-300 mb-8" style={{ fontFamily: 'Lato, sans-serif' }}>
            Explore my diverse range of projects and see how creativity meets technology.
          </p>
          
          {/* Call to Action Button */}
          <a href="#projects" className="bg-amber-400 text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-amber-500 transition-all duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Explore My Projects
          </a>
        </div>
      </div>
      
      {/* Other Sections (e.g., About Me, Featured Projects, Categories) would go here */}
      {/* ... */}
      
    </div>
  );
};

export default Home;
