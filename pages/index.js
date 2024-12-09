import { Tab } from '@headlessui/react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen text-white font-sans">
      <div className="max-w-5xl mx-auto mt-20 p-8">
        <h1 className="text-6xl font-extrabold text-cyan-500 mb-10 text-center tracking-widest transform transition-all duration-300 hover:scale-105 glow-text">
          Welcome to Doxpaste
        </h1>

        <Tab.Group>
          <Tab.List className="flex space-x-10 justify-center mb-8">
            {['Login', 'Register', 'Pastes', 'Upload Paste'].map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  selected
                    ? 'px-8 py-3 text-white bg-cyan-500 rounded-xl shadow-xl transform scale-105 transition-all duration-300'
                    : 'px-8 py-3 text-cyan-400 bg-gray-800 rounded-xl hover:bg-cyan-600 hover:text-white transition-all duration-300'
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel className="p-8 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl shadow-xl">
              <h2 className="text-3xl font-semibold mb-4">Login</h2>
              <p className="text-lg mb-6">Already have an account? Login to access your pastes and more.</p>
              <Link href="/login">
                <a className="text-cyan-400 hover:underline mt-4 inline-block text-xl">Go to Login</a>
              </Link>
            </Tab.Panel>

            <Tab.Panel className="p-8 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl shadow-xl">
              <h2 className="text-3xl font-semibold mb-4">Register</h2>
              <p className="text-lg mb-6">Sign up to start creating and sharing your pastes.</p>
              <Link href="/register">
                <a className="text-cyan-400 hover:underline mt-4 inline-block text-xl">Go to Register</a>
              </Link>
            </Tab.Panel>

            <Tab.Panel className="p-8 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl shadow-xl">
              <h2 className="text-3xl font-semibold mb-4">Pastes</h2>
              <p className="text-lg mb-6">Explore all pastes shared by other users.</p>
              <Link href="/pastes">
                <a className="text-cyan-400 hover:underline mt-4 inline-block text-xl">View Pastes</a>
              </Link>
            </Tab.Panel>

            <Tab.Panel className="p-8 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-xl shadow-xl">
              <h2 className="text-3xl font-semibold mb-4">Upload Paste</h2>
              <p className="text-lg mb-6">Upload your own paste to share with the community.</p>
              <Link href="/upload">
                <a className="text-cyan-400 hover:underline mt-4 inline-block text-xl">Go to Upload Paste</a>
              </Link>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Home;
