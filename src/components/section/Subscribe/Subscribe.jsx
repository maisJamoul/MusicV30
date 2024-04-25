
import './Subscribe.css';

function Subscribe() {
  return (
    <div className="row mx-0 py-5 bg-danger">

      <div className="col-md-3"></div>
      
      <div className="col-md-6">
        <h1 className="m-2 text-white ">Get in touch</h1>
        <input type="text" placeholder="name" className="m-2 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        <input type="phone" placeholder="phone" className="m-2 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        <input type="email" placeholder="email" className="m-2 form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        <textarea placeholder="message" className="m-2 form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button type="submit" className="m-2 w-100 fw-bold btn btn-dark mb-3">Send</button>

      </div>

      <div className="col-md-3"></div>

    </div> 
  )
}

export default Subscribe
