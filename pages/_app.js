import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      { loading && <Loading /> }
      <Component {...pageProps} />
    </>
  )
}

export default MyApp