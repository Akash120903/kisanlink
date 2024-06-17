import Image from "next/image";
import Navbar from "./components/navbar";
import Carousel from "./components/home/carousel";


const slides = [
  "https://www.kisanlink.in/wp-content/uploads/0707-new-web-banner.jpg",
  "https://www.kisanlink.in/wp-content/uploads/FPObanner.jpg",
  "https://www.kisanlink.in/wp-content/uploads/banner.jpg",


]

export default function Home() {
  return (

    <div>
      <Navbar />

      <Carousel autoSlide={true} >
        {[...slides.map((s) => (
          <img src={s} key={s} />
        ))]}
      </Carousel>
    </div>



  )
}
