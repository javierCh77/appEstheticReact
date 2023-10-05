//importo las img
import "./especialidades.css";


export default function Especialidades() {
  return (
    <div className="container-especialidades" id="servicios">
        <div className="box-title">
            Especialidades
        </div>
        <div className="container-esp">
        <div className="row mb-4">
              <div className="col-7 img1">
                    <div className="content"><h2>aqui contenido</h2></div> 
              </div>
              <div className="col-5 facial">
                  Facial
                <h3>Plasma brillo y luminosidad</h3>
              </div>
        </div>
        <div className="row mb-4">
             <div className="col-5 botox">
                Botox
                <h3>Cara, axilas macetero y pies</h3>
              </div>
              <div className="col-7 img2">
              <div className="content2"><h2>aqui contenido</h2></div> 
              </div>
        </div>
        <div className="row  mb-4">
              <div className="col-7 img3">
              <div className="content"><h2>aqui contenido</h2></div> 
              </div>
              <div className="col-5 acido">
                Acido Iluronico
                <h5>Rostro</h5>
              </div>
        </div>
        <div className="row  mb-4">
             <div className="col-5 sculptra">
                Sculptra
                <h5>Bucinador y cuello</h5>
              </div>
              <div className="col-7 img4">
              <div className="content2"><h2>aqui contenido</h2></div> 
              </div>
        </div>
        </div>
    </div>
  );
}
