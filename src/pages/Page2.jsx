import ShowImage from "../components/ShowImage"
import ShowText from "../components/ShowText"
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg"; 


const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <ShowText text={"Première image"} />
      <ShowImage imageURL={img1} />
      <ShowText text={"Deuxième image"} />
      <ShowImage imageURL={img2} />
    </div>
  )
}

export default Page2