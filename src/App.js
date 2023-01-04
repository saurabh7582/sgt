import About from './Componet/About';
import Head from './Componet/Head'
import Header from './Componet/Header';
import Services from './Componet/Services';
import Project from './Componet/Project';
import Count from './Componet/Count';
import ServiceBottom from './Componet/ServiceBottom';
import Testimonal from './Componet/Testimonal';
import NewsBlogs from './Componet/NewsBlogs';
import Collaberation from './Componet/Collaberation';
import Footer from './Componet/Footer';


function App() {
  return (
    <>
      <Head />
      <Header />
      <About />
      <Services />
      <Project />
      {/* <Owl_Curosal /> */}
      <Count />
      <ServiceBottom />
      <Testimonal />
      <NewsBlogs />
      <Collaberation />
      <Footer />
    </>
  );
}

export default App;
