import Card from './Components/Card'
import { useState } from 'react'
import './App.css'

function App() {
  const [codigo, setCodigo] = useState("")
  const [nombre, setNombre] = useState("")
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleChangeCodigo = (event) => setCodigo(event.target.value.trim())
  const handleChangeNombre = (event) => setNombre(event.target.value.trim())
  const handleSubmit = (event) => {
    event.preventDefault()

    if (codigo.length == 3 && nombre.length >= 6) {
      setShow(true)
      setError(false)
    }
    else {
      setError(true)
      setShow(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese el codigo' onChange={handleChangeCodigo} />
        <input type="text" placeholder='Ingrese el nombre' onChange={handleChangeNombre} />
        <button >Validar </button>
      </form>
      {show ?
        <>

          <Card codigo={codigo} nombre={nombre} />

        </>
        : ""

      }
      {error && <h3>Por favor chequea que la información este corecta.</h3>}

    </>
  )
}

export default App
