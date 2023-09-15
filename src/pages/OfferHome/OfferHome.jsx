import React from 'react'
import Banner from './components/Banner'
import DealsDay from './components/DealsDay'
import FashionFlash from './components/FashionFlash'
import TrendingOffers from './components/TrendingOffers'
import TopOffers from './components/TopOffers'

function OfferHome() {
  return (
    <>
      <Banner />
      <DealsDay />
      <FashionFlash/>
      <TrendingOffers/>
      <TopOffers/>
    </>
  )
}

export default OfferHome