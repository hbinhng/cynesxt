import Greet from 'components/Greet';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cynesxt</title>

        <meta
          name="description"
          content="Nest.js, Next.js and Cypress monorepo template"
        />

        <link rel="manifest" href="manifest.webmanifest" />
      </Head>

      <Greet />
    </div>
  );
};

export default Home;
