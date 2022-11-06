import { Link } from "react-router-dom";
import sampleImage from "../../../assets/penandpaper.png"
const About = (props) => {
    return (
        <div className='container'>
            <h1 className="text-centre" my-4 style={{color: props.mode==="light"?"black":"white"}}>About TextUtils</h1>

            <div className="accordion "  id="accordionExample">
                <div className={`accordion-item bg-${props.mode}`}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode==="light"?"black":"white"}}>
                            About TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode}`} style={{color: props.mode==="light"?"black":"white"}}>
                            <strong>This is the first item's accordionbody.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode==="light"?"black":"white"}}>
                            About the Founders
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode==="light"?"black":"white"}}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed bg-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode==="light"?"black":"white"}}>
                            About our Company Values
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode==="light"?"black":"white"}}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-around my-4 ">
            <div className={`card bg-${props.mode}`} style={{width: "18rem"}}>
                <img src={sampleImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{color: props.mode==="light"?"black":"white"}}>About Us</h5>
                    <p className="card-text" style={{color: props.mode==="light"?"black":"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="about" className="btn btn-primary">About us</Link>
                </div>
            </div>

            <div className={`card bg-${props.mode}`}  style={{width: "18rem"}}>
                <img src={sampleImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{color: props.mode==="light"?"black":"white"}}>Contact Us</h5>
                    <p className="card-text" style={{color: props.mode==="light"?"black":"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/" className="btn btn-primary">Home</Link>
                </div>
            </div>
            <div className={`card bg-${props.mode}`}  style={{width: "18rem"}}>
                <img src={sampleImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{color: props.mode==="light"?"black":"white"}}>Founders</h5>
                    <p className="card-text" style={{color: props.mode==="light"?"black":"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="about" className="btn btn-primary">About</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About;