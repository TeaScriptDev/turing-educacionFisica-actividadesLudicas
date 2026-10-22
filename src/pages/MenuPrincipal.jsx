import { estudiantes } from "../data/estudiantes"

function MenuPrincipal () {
    return(
        <>
            <div className="">
                <span>Educación Física</span>
                <h1>Actividades Lúdicas</h1>
                <p>Ingresar a...</p>

                {
                    estudiantes.map((estudiante) => (
                        <button>{estudiante.nombre}</button>
                    ))
                }
            </div>
        </>
    )
}

export default MenuPrincipal