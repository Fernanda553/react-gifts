import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('One Punch')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return

    setInputValue('')
    onNewCategory(inputValue.trim())
  }
  return (
    <form onSubmit={handlerSubmit}>
      <input
        type='text'
        placeholder='Buscar gifts'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
