import React from 'react'
import Navbar from './navbar/Navbar'
import Header from './header/Header'
import Tags from './Tags/Tags'
import Slid from './slider/Slid'
import DataCart from './dataCart/DataCart'
import Baner from './baner/Baner'
import BigCart from './big-cart/BigCart'
import DataWeb from './dataWeb/DataWeb'
import Keypoints from './Keypoints/Keypoints'
import Download from './downloadapp/Download'
import Mag from './magzin/Magzin'
import Crypto from './crypto-info/Crypto'
import Question from './question/Qustion'
import Footer from './footer/Footer'
import Table from './table/Table'



export default function Home() {
  return (

    <div className='bg-white'>
      <Navbar />
      <Header />
      <Tags/>
      <Slid />
      <DataCart />
      <BigCart />
      <Table/>
      <DataWeb />
      <Keypoints />
      <Download />
      <Mag />      
      <Crypto />
      <Question />
      <Baner />
      <Footer />

    </div>
  )
}


 