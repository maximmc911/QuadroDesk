import { type ReactNode } from 'react'


export const Choise__bgImage = ({children,  imagesArray}: { children: ReactNode , imagesArray: string[] }) => {

//   const imageCount = Object.keys(images);
  return (
    <>
      <>
      <div
        className="min-h-[94vh]  w-full bg-cover bg-center bg-no-repeat flex justify-around items-center"
        style={{ backgroundImage: `url(${imagesArray[Math.floor(Math.random() * imagesArray.length)]})` }}
      >

        {/* <WriteForm /> */}
        {/* <Animation__text text="Добро пожаловать в QuadroDesk"/> */}
        {children}
      </div>
    </>
    
    </>
  )
}
