import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { estudiantes } from '../data/estudiantes'
import './PresentacionEstudiante.css'
import Error404 from './Error404'
import { useEffect, useRef } from 'react'

const secciones = [
  {
    numero: "01",
    clave: "calentamientoArticular",
    titulo: "Calentamiento articular",
    descripcion: "Preparamos las articulaciones con movimientos suaves y controlados.",
    frase: "Estira · respira · repite",
    color: "amarillo"
  },
  {
    numero: "02",
    clave: "calentamientoGeneral",
    titulo: "Calentamiento general",
    descripcion: "Activamos todo el cuerpo y aumentamos el ritmo poco a poco.",
    frase: "Activa · salta · muévete",
    color: "celeste"
  },
  {
    numero: "03",
    clave: "coreografia",
    titulo: "Coreografía",
    descripcion: "Combinamos pasos, coordinación y ritmo en una secuencia de baile.",
    frase: "Coordinación · ritmo",
    color: "rojo"
  }
]

function PresentacionEstudiante() {
  const { nombre } = useParams()
  const estudiante = estudiantes.find(
    (est) => est.nombre.toLowerCase() === (nombre || "").toLowerCase()
  )

  const audioRef = useRef(null)

  const fadeAudio = (audioElement, inicioVol, finVol, duracion, callback) => {
    if (!audioElement) return
    const pasos = 20
    const intervaloTiempo = duracion / pasos
    const cambioVolumen = (finVol - inicioVol) / pasos

    let actualVol = inicioVol
    audioElement.volume = Math.max(0, Math.min(1, actualVol))

    const intervalo = setInterval(() => {
      actualVol += cambioVolumen
      if (
        (cambioVolumen > 0 && actualVol >= finVol) ||
        (cambioVolumen < 0 && actualVol <= finVol)
      ) {
        audioElement.volume = Math.max(0, Math.min(1, finVol))
        clearInterval(intervalo)
        if (callback) callback()
      } else {
        audioElement.volume = Math.max(0, Math.min(1, actualVol))
      }
    }, intervaloTiempo)
  }

  useEffect(() => {
    if (!estudiante || !estudiante.music) return

    const audio = new Audio(estudiante.music)
    audio.loop = true
    audio.volume = 0
    audioRef.current = audio

    audio.play().then(() => {
      fadeAudio(audio, 0, 0.3, 2000)
    }).catch((err) => {
      console.log("La reproducción automática fue bloqueada por el navegador:", err)
    })

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [estudiante])

  const handleVideoPlay = () => {
    const audio = audioRef.current
    if (audio && !audio.paused) {
      fadeAudio(audio, audio.volume, 0, 1000, () => {
        audio.pause()
      })
    }
  }

  const handleVideoPauseOrEnd = () => {
    const audio = audioRef.current
    if (audio) {
      audio.play().then(() => {
        fadeAudio(audio, 0, 0.3, 1500)
      }).catch((err) => console.log(err))
    }
  }

  if (!estudiante) {
    return <Error404 />
  }

  return (
    <div className="contenedor-presentacion">
      <div className="blob blob-top-left" />
      <div className="blob blob-top-right" />

      <motion.header
        className="encabezado-presentacion"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="enlace-volver">
          <i className="fa-solid fa-arrow-left-long"></i> Actividades Lúdicas
        </Link>

        <span className="etiqueta">
          <i className="fa-solid fa-person-running"></i>
          Educación Física
        </span>

        <div className="bloque-titulo">
          <img
            className="avatar-estudiante"
            src={estudiante.imagen}
            alt={"perfil de " + estudiante.nombre}
          />
          <div>
            <h1 className="titulo">
              {estudiante.nombre} {estudiante.apellido}
              <span className="subrayado" />
            </h1>
            <p className="subtitulo">presentación de las actividades lúdicas</p>
          </div>
        </div>
      </motion.header>

      <div className="lista-secciones">
        {secciones.map((seccion, index) => (
          <motion.section
            key={seccion.clave}
            className={`tarjeta-seccion color-${seccion.color}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.1, duration: 0.5 }}
          >
            <div className="encabezado-seccion">
              <span className="numero-seccion">{seccion.numero}</span>
              <div>
                <h2>{seccion.titulo}</h2>
                <p>{seccion.descripcion}</p>
              </div>
            </div>

            <div className="caja-video">
              <span className="etiqueta-vista-previa">
                <i className="fa-solid fa-eye"></i> vista previa
              </span>

              {estudiante.videosUrl[seccion.clave] ? (
                <video
                  className="video-estudiante"
                  src={estudiante.videosUrl[seccion.clave]}
                  controls
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPauseOrEnd}
                  onEnded={handleVideoPauseOrEnd}
                />
              ) : (
                <div className="video-pendiente">
                  <motion.button
                    className="boton-play"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa-solid fa-play"></i>
                  </motion.button>
                  <span>Video no disponible aún</span>
                </div>
              )}
            </div>

            <div className="pie-seccion">
              <span>{seccion.frase}</span>
              <span>Video de la actividad</span>
            </div>
          </motion.section>
        ))}
      </div>

      {estudiante.reflexionPersonal && (
        <motion.section
          className="tarjeta-reflexion"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2>Reflexión personal</h2>
          <p>{estudiante.reflexionPersonal}</p>
        </motion.section>
      )}
    </div>
  )
}

export default PresentacionEstudiante