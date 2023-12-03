import Image from 'next/image'
import styles from './page.module.css'
import Student from '../../components/Student/student'


export default function Home() {
  return (
    <main className={styles.main}>
  <h1>Hello</h1>
  <Student />
    </main>
  )
}
