import { Tab } from '@headlessui/react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-indigo-900 to-black min-h-screen text-white font-sans">
      <div className="max-w-4xl mx-auto mt-16 p-6">
        <h1 className="text-5xl font-extrabold text-center text-cyan-400 mb-10 tracking-wide">
          Welcome to Doxpaste
        </h1>
        
        <Tab.Group>
          <Tab.List className="flex space-x-8 justify-center mb-8">
            <Tab
              className={({ selected }) =>
                selected
                  ? 'px-8 py-3 text-white bg-cyan-600 rounded-xl shadow-lg transform scale-105 transition-all duration-300'
                  : 'px-8 py-3 text-cyan-300 bg-gray-900 rounded-xl hover:bg-cyan-700 hover:text-white transition-all duration-300'
              }
            >
              Login
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'px-8 py-3 text-white bg-cyan-600 rounded-xl shadow-lg transform scale-105 transition-all duration-300'
                  : 'px-8 py-3 text-cyan-300 bg-gray-900 rounded-xl hover:bg-cyan-700 hover:text-white transition-all duration-300'
              }
            >
              Register
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'px-8 py-3 text-white bg-cyan-600 rounded-xl shadow-lg transform scale-105 transition-all duration-300'
                  : 'px-8 py-3 text-cyan-300 bg-gray-900 rounded-xl hover:bg-cyan-700 hover:text-white transition-all duration-300'
              }
            >
              Pastes
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'px-8 py-3 text-white bg-cyan-600 rounded-xl shadow-lg transform scale-105 transition-all duration-300'
                  : 'px-8 py-3 text-cyan-300 bg-gray-900 rounded-xl hover:bg-cyan-700 hover:text-white transition-all duration-300'
              }
            >
              Upload Paste
            </Tab>
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel className="p-8 bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h2 className="text-3xl font-semibold">Login</h2>
              <Link href="/login">
                <a className="text-cyan-400 hover:underline mt-4 inline-block">Go to Login</a>
              </Link>
            </Tab.Panel>

            <Tab.Panel className="p-8 bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h2 className="text-3xl font-semibold">Register</h2>
              <Link href="/register">
                <a className="text-cyan-400 hover:underline mt-4 inline-block">Go to Register</a>
              </Link>
            </Tab.Panel>

            <Tab.Panel className="p-8 bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h2 className="text-3xl font-semibold">Pastes</h2>
              <Link href="/pastes">
                <a className="text-cyan-400 hover:underline mt-4 inline-block">View Pastes</a>
              </Link>
            </Tab.Panel>

            <Tab.Panel className="p-8 bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h2 className="text-3xl font-semibold">Upload Paste</h2>
              <Link href="/upload">
                <a className="text-cyan-400 hover:underline mt-4 inline-block">Go to Upload Paste</a>
              </Link>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Home;
