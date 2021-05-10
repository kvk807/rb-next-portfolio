import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({ slug, title }) => {
  return (
    <li>
      <Link as={`/${slug}`} href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}

const Blog = () => {
  return (
    <Layout title='Blog'>
      <h3>Bob's Blog</h3>
      <ul>
        <PostLink slug='react-post' title='React Post' />
        <PostLink slug='vue-post' title='Vue Post' />
        <PostLink slug='angular-post' title='Angular Post' />
      </ul>
    </Layout>
  )
}

export default Blog
