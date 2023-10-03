//importo las img
import "./especialidades.css";


export default function Especialidades() {
  return (
    <div className="container-especialidades" id="servicios">
        <div>
            <h1>Especialidades</h1>
        </div>
        <div className="container-esp">
        <div className="row">
              <div className="col-7 img1">
              </div>
              <div className="col-5 facial">
                  Facial
                <h5>Plasma brillo y luminosidad</h5>
              </div>
        </div>
        <div className="row">
             <div className="col-5 botox">
                Botox
                <h5>Cara, axilas macetero y pies</h5>
              </div>
              <div className="col-7 img2">
              </div>
        </div>
        <div className="row">
              <div className="col-7 img3">
              </div>
              <div className="col-5 acido">
                Acido Iluronico
                <h5>Rostro</h5>
              </div>
        </div>
        <div className="row">
             <div className="col-5 sculptra">
                Sculptra
                <h5>Bucinador y cuello</h5>
              </div>
              <div className="col-7 img4">
              </div>
        </div>
        </div>
    </div>
  );
}
