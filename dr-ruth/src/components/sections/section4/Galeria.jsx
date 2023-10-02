import "./galeria.css";

export default function Section4() {
  return (
    <div className="container-section4" id="galeria">
      <div>
        <h1 >Galeria</h1>
      </div>
    
      <div className="col-12">
      <div className="row">
            <div className="col-6  container-galeria1"> 
              <div className="" id="g1">
              </div>
            </div>
            <div className="col-6 container-galeria2">
                <div id="g2"> 
                </div>
                <div id="g3">
                </div>
            </div>  
        </div>
      </div>
      
      <div className="col-12 container-img">
      <div className="row">
            <div className="col-6  container-galeria3"> 
                <div id="g4"></div>
                <div id="g5"></div>
            </div>
            <div className="col-6 container-galeria2">
               <div className="" id="g1"></div>
            </div>  
        </div>
      </div>
      
    </div>
  );
}
