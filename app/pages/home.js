import Layout from '../components/Layout'

export default function Home() {
    return (
        <div>
      <p>Hello test</p></div>
        )
    }

    Home.getLayout = function getLayout(page) {
        return (
          <Layout>
            
            {page}
          </Layout>
        )
      }