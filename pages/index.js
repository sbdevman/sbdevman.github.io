import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu'
import Services from '@components/Services'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Saeid Babaei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <div className="center-image">
          <img src="11518113.jpeg" alt="Saeid Babaei" />
        </div>
        <Header title="Saeid Babaei" />
          <Services />
      </main>
      <Footer />
    </div>
  )
}
