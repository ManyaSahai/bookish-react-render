import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/footer"
import Premium from '../components/Premium';

function Premiums() {
  
  return (
    <>
    <Navbar/>
    <div className=" min-h-screen ">
         <Premium/>
          </div>
    <Footer/>
    </>
  )
}

export default Premiums;
