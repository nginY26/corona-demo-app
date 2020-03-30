import Head from 'next/head'
import App from './containers/App'
import Header from './containers/Header'

const Home = () => (
  <div className="container-fluid mt-3">
    <Head>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
      <title>COVID19 Demo Uygulama | Engin Yenice</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <App /> 
  </div>
)

export default Home