import Layout from '../components/Layout'

const _error = ({ statusCode }) => {
  return (
    <Layout title='Error!!'>
      {statusCode ? (
        `Could not load your user data: Status Code ${statusCode}`
      ) : (
        <p>Sorry, that page could not be found. Try again</p>
      )}
    </Layout>
  )
}

export default _error
