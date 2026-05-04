// import React, { type ReactNode } from 'react'

import type { ReactNode } from "react"

interface props {
    navbar : ReactNode,
    mainInfo: ReactNode
}


const Container = ({props}: {props:props}) => {
  return (
    <>
        <div className="flex flex-col justify-between items-center min-h-screen">
{props.navbar}
{props.mainInfo}
            <div className="w-full " >
               <p className="p-20 text-center"> &#169; Copyright by Maxim Sokolov</p>
            </div>
    </div>
    
    </>
  )
}

export default Container