// import React from 'react'

import Icons from "../../UI/icons/Icons"

const Page = () => {
  return (
    <>
  <div className="flex justify-center flex-col items-center gap-2">
    <Icons name="error" color="red" size={85}/>
    <h1 className="text-2xl">Cтраница временно недоступна</h1>
  </div>
    
    </>
  )
}

export default Page