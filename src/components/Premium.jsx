import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from "react-router-dom"

function Premium() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 item-center justify-center text-center'>
      <h1 className='text-2xl md:4xl'> We are thrilled to <span className='text-pink-500'> welcome you!</span></h1>
    
    <p className='mt-12'>
    Welcome to our Premium Collection! Here, you'll find an exclusive selection of books curated just for discerning readers like you.
     Our premium titles include bestsellers, timeless classics, and unique editions that you won't find anywhere else. 
    Enjoy browsing through our handpicked collection and discover your next great read. Thank you for choosing our bookstore, where quality and excellence are at the heart of everything we offer. Happy reading!
 </p>

 <Link to="/">
 <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
  Back
  </button>
  </Link>

   </div>
   <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
    {
      list.map((item)=> (
        <Cards key={item.id} item={item}/>
      )
    )
    }
   </div>
   
   </div>
   </>
  );

}

export default Premium;
