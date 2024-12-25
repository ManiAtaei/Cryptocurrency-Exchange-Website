import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import Tags from './Tags/Tags'
import Slid from './slider/Slid'
import DataCart from './DataCart/DataCart'
import Baner from './Baner/Baner'
import BigCart from './Big-cart/BigCart'
import DataWeb from './DataWeb/DataWeb'
import Pov from './Keypoints/Pov'
import Download from './Downloadapp/Download'
import Mag from './Mag/Mag'
import Crypto from './Crypto-info/Crypto'
import Qs from './question/Qs'
import Footer from './Footer/Footer'
import CryptoTable from './Tb2/CryptoTable'



export default function Home() {
  return (

    <div className='bg-white'>
      <Navbar />
      <Header />
      <Tags/>
      <Slid />
      <DataCart />
      <BigCart />
      <CryptoTable/>
      <DataWeb />
      <Pov />
      <Download />
      <Mag />      
      <Crypto />
      <Qs />
      <Baner />
      <Footer />

    </div>
  )
}


 