// import React, { type ReactNode } from 'react'

import type { ReactNode } from "react"
import Navbar from "../navbar/Navbar"

interface props {
    navbar? : ReactNode,
    mainInfo: ReactNode
}


const Container = ({props}: {props:props}) => {
  return (
    <>
        <div className="flex flex-col justify-between items-center min-h-screen w-full  overflow-y-auto">
          <Navbar/>

{props.mainInfo}
         
                <footer className="flex w-full  justify-between items-center p-2 radius-modalWindow bg-secondary-bg text-main-text shadow-(--medium_shadow) rounded-t-none" >

               <p className=" text-center"> &#169; Copyright by Maxim Sokolov</p>
                </footer>
       
    </div>
    
    </>
  )
}

export default Container