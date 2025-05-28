import Head from "next/head";
import Header from "../components/Mobile/Header/MobileHeader";
import MobileFooter from "../components/Mobile/Footer/MobileFooter";
export default function Home() {
  return (
    <>
      <Head>
        <title>RoataWay UI</title>
        <meta name="description" content="RoataWay - cauciucuri și camere de aer" />
      </Head>
      <Header />
      <main>       {/* Тут будут другие секции */}
        <h1>Hello from RoataWay UI</h1>
	  <MobileFooter />
    
      </main>
    </>
  );
}