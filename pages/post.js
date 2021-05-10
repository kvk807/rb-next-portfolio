import Layout from '../components/Layout'
import { withRouter } from 'next/router'

const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id nemo non
        corporis quasi unde odit minus? Nostrum, ad? Ea exercitationem quaerat
        dolorum? Beatae, amet reprehenderit!
      </p>
    </Layout>
  )
}

export default withRouter(Post)
