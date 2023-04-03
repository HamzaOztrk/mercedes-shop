import mercedes1 from "../img/mercedes1.jpg"
import mercedes2 from "../img/mercedes2.jpg"
import mercedes3 from "../img/mercedes3.jpg"
import mercedes4 from "../img/mercedes4.webp"
import mercedes5 from "../img/mercedes5.jpg"
import mercedes6 from "../img/mercedes6.webp"
import "../index.css"


const Gallery = () => {
  return (
    <div className="container text-center mt-4">
     
        <h1>WELCOME TO MERCEDES GALLERY</h1>
      
    <div className="row justify-content-center g-3">
      
        <img  className="col-lg-12 col-sm-12 " src={mercedes1} alt="1" />
        <img  className="col-lg-6 col-sm-12" src={mercedes2} alt="2" />
        <img className="col-lg-6 col-sm-12" src={mercedes3} alt="3" />
        <img className="col-lg-6 col-sm-12" src={mercedes4} alt="4" />
        <img className="col-lg-6 col-sm-12" src={mercedes6} alt="5" />
        <img  src={mercedes5} alt="6" />
      
      </div>
    </div>
   
  )
}

export default Gallery