import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import default styles for tabs
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Doxbin Style Site</h1>
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
          <Tab>Pastes</Tab>
          <Tab>Upload Paste</Tab>
        </TabList>

        <TabPanel>
          <h2>Login</h2>
          <Link href="/login">Go to Login</Link>
        </TabPanel>

        <TabPanel>
          <h2>Register</h2>
          <Link href="/register">Go to Register</Link>
        </TabPanel>

        <TabPanel>
          <h2>Pastes</h2>
          <Link href="/pastes">View Pastes</Link>
        </TabPanel>

        <TabPanel>
          <h2>Upload Paste</h2>
          <Link href="/upload">Go to Upload Paste</Link>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;
