//importo las img
import "./especialidades.css";


export default function Especialidades() {
  return (
    <div className="container-especialidades">
        <div>
            <h1>Especialidades</h1>
        </div>
        <div className="container-esp">
        <div className="row">
              <div className="col-7 img1">
              </div>
              <div className="col-5 facial">
                <h2>Facial</h2>
                <h6>Plasma brillo y luminosidad</h6>
              </div>
        </div>
        <div className="row">
             <div className="col-5 botox">
                <h2>Botox</h2>
                <h6>Cara, axilas macetero y pies</h6>
              </div>
              <div className="col-7 img2">
              </div>
        </div>
        <div className="row">
              <div className="col-7 img3">
              </div>
              <div className="col-5 acido">
                <h2>Acido Iluronico</h2>
                <h6>Rostro</h6>
              </div>
        </div>
        <div className="row">
             <div className="col-5 sculptra">
                <h2>Sculptra</h2>
                <h6>Bucinador y cuello</h6>
              </div>
              <div className="col-7 img4">
              </div>
        </div>
        </div>
    </div>
  );
}
