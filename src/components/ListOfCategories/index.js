import React, { useEffect, useState } from 'react'
import {Category} from '../Category'
import {List, Item} from  './styles'
//import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    window.fetch('https://petgram-server-joercamu.vercel.app/categories')
    .then(res => res.json())
    .then(res => {
      setCategories(res)
    })
  },[])
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
      }
    </List>
  )
}
