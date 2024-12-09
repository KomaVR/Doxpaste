import { Tab } from '@headlessui/react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-semibold text-center mb-5">Welcome to Doxpaste</h1>
      <Tab.Group>
        <Tab.List className="flex space-x-4 justify-center mb-4">
          <Tab
            className={({ selected }) =>
              selected
                ? 'px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md'
                : 'px-6 py-2 text-blue-600 bg-gray-100 rounded-lg hover:bg-blue-200 transition-colors'
            }
          >
            Login
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md'
                : 'px-6 py-2 text-blue-600 bg-gray-100 rounded-lg hover:bg-blue-200 transition-colors'
            }
          >
            Register
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md'
                : 'px-6 py-2 text-blue-600 bg-gray-100 rounded-lg hover:bg-blue-200 transition-colors'
            }
          >
            Pastes
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? 'px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md'
                : 'px-6 py-2 text-blue-600 bg-gray-100 rounded-lg hover:bg-blue-200 transition-colors'
            }
          >
            Upload Paste
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">Login</h2>
            <Link href="/login" className="text-blue-600 hover:underline mt-3 inline-block">Go to Login</Link>
          </Tab.Panel>
          <Tab.Panel className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">Register</h2>
            <Link href="/register" className="text-blue-600 hover:underline mt-3 inline-block">Go to Register</Link>
          </Tab.Panel>
          <Tab.Panel className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">Pastes</h2>
            <Link href="/pastes" className="text-blue-600 hover:underline mt-3 inline-block">View Pastes</Link>
          </Tab.Panel>
          <Tab.Panel className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold">Upload Paste</h2>
            <Link href="/upload" className="text-blue-600 hover:underline mt-3 inline-block">Go to Upload Paste</Link>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Home;
