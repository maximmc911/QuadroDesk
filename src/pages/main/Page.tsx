import { FormAuth } from "../../components/_main/form__reg/FormAuth";
import Container from "../../components/container/Container"
import { Choise__bgImage } from "../../UI/animation/Choise__bgImage";












const Page = () => {
const images = Object.keys(import.meta.glob(
"/public/*.{jpg,jpeg}",
{ eager: true, query: "?url", import: "default" }
));
console.log(images);

  return (
    <>

      <Container props={{
        // navbar: <NavbarPublic/>,
        mainInfo: <>
         <Choise__bgImage imagesArray={images}>
          <>
          {/* <Input/> */}
          <FormAuth/>
          </>
         </Choise__bgImage>
        </>,

      }} />


    </>
  )
}

export default Page