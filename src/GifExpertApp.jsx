import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])

  /*   const ApiKey = 'eA6bCQRyATkZhc0ffpQTJsBjYvURJQfL'
*/
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid
          key={category}
          category={category}
        />
      ))}
    </>
  )
}
