// import React from 'react'

import { Link } from "react-router"
import Container from "../../components/container/Container"
import NavbarPublic from "../../components/navbar/NavbarPublic"


const Page = () => {
  return (
    <>
<Container props={{
  navbar: <NavbarPublic/>,
  mainInfo: <div>sfsdfsdfsdf

<Link to={'/dkljflksfjlksdfj'}> ошибка</Link>

  </div>
}}/>
    
    
    
    </>
  )
}

export default Page