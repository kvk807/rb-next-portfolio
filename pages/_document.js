import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name='description'
            content='A site for my programmiing portfolio'
          />
          <meta charset='utf-8' />
          <meta name='robots' content='noindex, nofollow' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat'
            rel='stylesheet'
          />
          <link
            href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            font-family: Montserrat, sans-serif;
          }
        `}</style>
      </Html>
    )
  }
}

export default MyDocument
