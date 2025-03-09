
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ScrollToTopButton from '../components/ScrollToTop/ScrollToTopButton'

const FrontendLayout = () => {

  return (

    <>
      <Header/>
          <main className=''>
              <Outlet/>   
          </main> 
          <ScrollToTopButton />
      <Footer/>
    </>

  )
}

export default FrontendLayout