import Example from '@/components/navbar'
import Header from '@/components/header'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="">
      <Example></Example>
      <Header></Header>
      {/* <About></About> */}
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}
