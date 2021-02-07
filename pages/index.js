import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem minim occaecat fugiat consequat exercitation proident tempor
        pariatur dolore labore. Velit ut Lorem voluptate culpa irure laboris
        nulla consectetur occaecat consequat fugiat. Enim veniam occaecat
        voluptate aliqua dolor cupidatat id duis excepteur adipisicing. Sint
        ipsum laboris dolore nisi labore culpa est excepteur esse incididunt
        esse proident officia. Et excepteur Lorem nostrud eu velit in eu
        adipisicing.
      </p>
      <Link href='/ninjas'>
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
