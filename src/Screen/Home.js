import React from 'react'
import Head from '../Componet/Head'
import Header from '../Componet/Header'
import About from '../Componet/About'
import Services from '../Componet/Services'
import ServiceBottom from '../Componet/ServiceBottom'
import Project from '../Componet/Project'
import Count from '../Componet/Count'
import NewsBlogs from '../Componet/NewsBlogs'
import Collaberation from '../Componet/Collaberation'
import Footer from '../Componet/Footer'

function Home() {
  return (
    <>
        <Head />
        <Header />
        <About />
        <Services />
        <Project />
        <Count />
        <ServiceBottom />
        <NewsBlogs />
        <Collaberation />
        <Footer />
    </>
  )
}

export default Home