import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Saeid Babaei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Saeid Babaei" />
        <p className="description">
          <code>pages/index.js</code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
