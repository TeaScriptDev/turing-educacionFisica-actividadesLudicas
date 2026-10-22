import { estudiantes } from "../data/estudiantes"
import { Link } from "react-router-dom"
import './MenuPrincipal.css'

function MenuPrincipal () {
    return(
        <div className="contenido-menu">
            <div className="contenido-centrado">
                <span className="etiqueta">Educación Física</span>
                <h1>Actividades Lúdicas</h1>
                <p>Ingresar a...</p>

                {
                    estudiantes.map((estudiante) => (
                        <button>
                            {estudiante.nombre}
                            <i class="fa-solid fa-arrow-right-long"></i>
                            <div className="oculto">
                                <img src={estudiante.imagen} alt={"perfil de " + estudiante.nombre} />
                                {/* <Link to="/">Entrar</Link> */}
                                <button>Entrar</button>
                            </div>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuPrincipal