import { Tab } from '@headlessui/react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-800 to-black min-h-screen text-white font-sans">
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
            <Tab.Panel className="futuristic-card">
              <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
              <p className="text-lg mb-6 text-center">Already have an account? Login to access your pastes and more.</p>
              <div className="text-center">
                <Link href="/login">
                  <a className="text-cyan-400 hover:underline mt-4 inline-block text-xl">Go to Login</a>
                </Link>
              </div>
            </Tab.Panel>

            <Tab.Panel className="futuristic-card">
              <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
              <p className="text-lg mb-6 text-center">Sign up to start creating and sharing your pastes.</p>
              <div className="text-center">
                <Link href="/register">
                  <a className="text-cyan-400 hover:underline mt-4 inline-block text-xl">Go to Register</a>
                </Link>
              </div>
            </Tab.Panel>

            <Tab.Panel className="futuristic-card">
              <h2 className="text-3xl font-semibold mb-4 text-center">Pastes</h2>
              <p className="text-lg mb-6 text-center">Explore all pastes shared by other users.</p>
              <div className="text-center">
                <Link href="/pastes">
                  <a className="text-cyan-400 hover:underline mt-4 inline-block text-xl">View Pastes</a>
                </Link>
              </div>
            </Tab.Panel>

            <Tab.Panel className="futuristic-card">
              <h2 className="text-3xl font-semibold mb-4 text-center">Upload Paste</h2>
              <p className="text-lg mb-6 text-center">Upload your own paste to share with the community.</p>
              <div className="text-center">
                <Link href="/upload">
                  <a className="text-cyan-400 hover:underline mt-4 inline-block text-xl">Go to Upload Paste</a>
                </Link>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Home;
