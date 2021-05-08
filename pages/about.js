import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout title='About'>
      <p>A top Javascript programmer</p>
      <Image src='/logo.png' alt='javascript logo' width='200' height='200' />
    </Layout>
  )
}

export default about
