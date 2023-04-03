
import "../index.css"
import home from "../img/home.avif"


const Home = () => {
  return (
    <article className='container p-2'>
        <h1 className='text-center'>-MERCEDES-</h1>

        <div className='row text-center d-flex justify-content-center'>
        
            
            <a className="m-4 btn btn-dark w-25" href="https://www.mercedes-benz.com.tr/?gagcmid=GA_18281645913_141598244872_636076164203&gclid=Cj0KCQjw8qmhBhClARIsANAtbofbP7ORmbRaLOWI5UJv2nHsPPdjuRXReToVicMXguJ7xoWeIkNL-twaAlviEALw_wcB&gclsrc=aw.ds&group=all&subgroup=see-all&view=BODYTYPE">DİSCOVER</a>
            <h4 className="m-3">NEW A SERİES</h4>
            <img className="rounded" 
            src={home} alt="img" />

            
        </div>
    </article>
  )
}

export default Home