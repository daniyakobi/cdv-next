import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainContainer = ({ keywords, children, namePage, moduleStyle }) => {
  return ( 
    <>
      <Head>
        <title>Code da-Vinchi</title>
        <meta name="description" content={ "Code da-Vinchi, analys, social networks, " + keywords } />
        <link rel="icon" href="../public/icons/favicon.ico" />
      </Head>
      <div className="nav">
        <Sidebar moduleStyle={ moduleStyle } />
        <Header moduleStyle={ moduleStyle } />
      </div>
      <div className={ `app ${namePage}` }>
        { children }
      </div>
    </>
  );
}

export default MainContainer;