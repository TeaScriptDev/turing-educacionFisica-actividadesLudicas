import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Error404.css'

function Error404() {
  return (
    <div className="contenedor-404">
      <div className="blob blob-top-left" />
      <div className="blob blob-top-right" />
      <div className="blob blob-bottom-left" />
      <div className="blob blob-bottom-right" />

      <motion.div
        className="contenido-404"
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
          <i className="fa-solid fa-triangle-exclamation"></i>
          Página no encontrada
        </motion.span>

        <motion.h1
          className="numero-404"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span className="lagrima lagrima-izq" />
          4
          <span className="boca-404">
            0
          </span>
          4
          <span className="lagrima lagrima-der" />
        </motion.h1>

        <p className="subtitulo-404">
          ¡¿Por que te perdiste?!
        </p>

        <motion.div
          className="marco-gif"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <img
            src="src/assets/cat-error.gif"
            className="gif-404"
          />
        </motion.div>

        <Link to="/" className="boton-volver">
          <i className="fa-solid fa-arrow-left-long"></i>
          Volver al menú
        </Link>
      </motion.div>
    </div>
  )
}

export default Error404