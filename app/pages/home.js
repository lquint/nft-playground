import Sidebar from '../components/sidebar'

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