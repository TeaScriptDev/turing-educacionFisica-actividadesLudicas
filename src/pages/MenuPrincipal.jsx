import { estudiantes } from "../data/estudiantes"
import { Link } from "react-router-dom"

function MenuPrincipal () {
    return(
        <>
            <div className="">
                <span>Educación Física</span>
                <h1>Actividades Lúdicas</h1>
                <p>Ingresar a...</p>

                {
                    estudiantes.map((estudiante) => (
                        <button>
                            {estudiante.nombre}
                            <div className="oculto">
                                <img src={estudiante.imagen} alt={"perfil de " + estudiante.nombre} />
                                {/* <Link to="/">Entrar</Link> */}
                                <button>Entrar</button>
                            </div>
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default MenuPrincipal