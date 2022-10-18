import { useState } from 'react'

const AddCategory = ({ setCategories }) => {

  const [ inputValue, setInputValue ] = useState('')

  // al apretar el boton corroboramos que el inputValue tenga valor
  // y una vez agregado al estado de categorias, vaciamos el input
  const onSubmit = (event) => {
    event.preventDefault()
    inputValue !== '' &&
    setCategories(event => [ inputValue, ...event ])
    setInputValue('');
  }

  const onInputChange = (event) => {
    setInputValue( event.target.value )
  }

  return (
    <>
      <form onSubmit={ onSubmit }>
        <input
          type='text'
          placeholder='Buscar gifs'
          value={ inputValue }
          onChange={ onInputChange }
        />

        <button>Agregar</button>
      </form>
    </>
  )
}

export default AddCategory