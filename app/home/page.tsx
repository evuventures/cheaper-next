import React from 'react'
import Hero from './mixins/hero'
import States from './mixins/states'
import Pricing from './mixins/pricing'
import Faq from './mixins/faq'

const page = () => {
  return (
    <>
    <Hero/>
    <States/>
    <Pricing/>
    <Faq/>
    </>
  )
}

export default page