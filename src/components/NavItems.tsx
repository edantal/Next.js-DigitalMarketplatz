'use client'

import { useState } from 'react'

import { PRODUCT_CATEGORIES } from '@/config'

import NavItem from './NavItem'

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const isAnyOpen = activeIndex !== null

  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          setActiveIndex(activeIndex === index ? null : index)
        }

        const isOpen = index === activeIndex

        return (
          <NavItem
            key={index}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default NavItems
