import { updateStock } from '@/sanity/sanity.query'
import React from 'react'

const Patch = async() => {
    const res = await updateStock('b5f83abd-4dc7-42b8-ab32-340e3bf3f497', 3,6 )
    console.log(res)

  return (
    <div>Patch</div>
  )
}

export default Patch