import Navbar from './components/Navbar'
import PrimaryHero from './components/PrimaryHero'
import Directory from './components/Directory'

export default function Home() {
  return (
    <div className='font-serif'>
      <Navbar />
      <PrimaryHero />
      <Directory />
    </div>
    )
}
