import { useState } from "react"
import { estudiantes } from "../data/estudiantes"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import './MenuPrincipal.css'

function MenuPrincipal() {
    const [activo, setActivo] = useState(null)

    return (
        <div className="contenido-menu">
            <div className="blob blob-top-left" />
            <div className="blob blob-top-right" />
            <div className="blob blob-bottom-left" />
            <div className="blob blob-bottom-right" />

            <motion.div
                className="contenido-centrado"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.span
                    className="etiqueta"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                >
                    <i className="fa-solid fa-person-running"></i>
                    Educación Física
                </motion.span>

                <h1 className="titulo">
                    Actividades lúdicas
                    <span className="subrayado" />
                </h1>

                <p className="subtitulo">ingresar a...</p>

                <div className="lista-estudiantes">
                    {estudiantes.map((estudiante, index) => {
                        const abierto = activo === estudiante.nombre
                        return (
                            <motion.div
                                className="tarjeta-estudiante"
                                key={estudiante.nombre}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.08, duration: 0.4 }}
                            >
                                <motion.button
                                    className={`boton-estudiante ${index % 2 === 0 ? "relleno" : "contorno"} ${abierto ? "activo" : ""}`}
                                    onClick={() => setActivo(abierto ? null : estudiante.nombre)}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <span>{estudiante.nombre}</span>
                                    <motion.span
                                        className="icono-flecha"
                                        animate={{ rotate: abierto ? 90 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                    </motion.span>
                                </motion.button>

                                <AnimatePresence>
                                    {abierto && (
                                        <motion.div
                                            className="panel-estudiante"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <img
                                                src={estudiante.imagen}
                                                alt={"perfil de " + estudiante.nombre}
                                            />
                                            <button className="boton-entrar">Entrar</button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default MenuPrincipal