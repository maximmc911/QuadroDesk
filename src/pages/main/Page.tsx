// import React from 'react'

// import { Link } from "react-router"


import Container from "../../components/container/Container"


const MainPageDesing = () =>{
const images = import.meta.glob(
  "/public/*.{jpg,jpeg}",
  { eager: true, query: "?url", import: "default" }
);

const imageCount = Object.keys(images);
console.log(imageCount);
console.log(imageCount[Math.floor(Math.random()*imageCount.length)]);


  return(
  <>
   <div 
      className="min-h-[94vh]  w-full bg-cover bg-center bg-no-repeat flex justify-around items-center"
      style={{ backgroundImage: `url(${imageCount[Math.floor(Math.random()*imageCount.length)]})` }}
    >
      {/* Здесь будет ваш контент, который появится ПОВЕРХ фона */}
      <div className="text-white text-3xl font-bold bg-black/50 p-10 rounded-xl">
        Добро пожаловать в QuadroDesk
      </div>
    </div>
  </>
  )
}







const Page = () => {

  return (
    <>

<Container props={{
  // navbar: <NavbarPublic/>,
  mainInfo: <>
  <MainPageDesing />
  </>,

}}/>
    
    
    </>
  )
}

export default Page