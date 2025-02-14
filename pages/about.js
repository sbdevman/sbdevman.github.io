import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Me - Saeid Babaei</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </Head>
      <Menu />
      <main>
        <Header title="About Me" />
        <section className="about-content">
          <p>Hello! I'm Saeid Babaei, a software architect and developer with a strong focus on backend development. I have extensive experience in designing and building scalable, high-performance systems. I love creating robust and efficient solutions to complex problems.</p>
          <p>In my free time, I enjoy learning new technologies and improving my skills. Feel free to connect with me on social media or check out my projects on GitHub.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}