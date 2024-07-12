import { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setCategorias] = useState(['One Punch'])

  const ApiKey = 'eA6bCQRyATkZhc0ffpQTJsBjYvURJQfL'

  return (
    <>
      <h1>GifExpertApp</h1>
      <ol>
        {
        categories.map(category => {
          return <li key={category}>{category}</li>
        })
}
      </ol>
    </>
  )
}
