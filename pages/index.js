import '../scss/styles.scss';
import Navbar from "../components/Navbar";
import Head from 'next/head';
import Title from '../components/Title';

const Index = () => (
  <section>
    <Head>
      <title>aisha diallo</title>
    </Head>
      <Navbar/>
      {/* <Title/> */}
      <img src={require('../components/images/image1.png')} height="50%" width="50%" />
    <h2>Bonjour, Hey!</h2>
    <section>
      <ul>
        <li>
        I grew up in Winnipeg.
        </li>
        <li>
        Je parle francais et anglais.
        </li>
        <li>
        I'm Senegalese and French Canadian
        </li>
        <li>
        Currently living in Montreal.
        </li>
        <li>
        Working at Shopify as a web developer.
        </li>
        <li>
        Before that I worked in recruiting, and also spent a few years as a developer advocate.
        </li>
        <li>
        I've never had Facebook, and I suck at social media
        </li>
        <li>
        Plants make me happy.
        </li>
        <li>
        Current obsession: Spin 🚴🏾‍♀️
        </li>
      </ul>
    </section>
  </section>
);

export default Index;
