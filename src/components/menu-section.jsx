import React from 'react'

const MenuSection = ({ heading, items, children }) => {
  const menuItems = items.map((item, i) => {
    let description = ''
    let price = ''

    if (item[2]) {
      description = <p className="small font-italic">{item[2]}</p>
    }

    if (typeof item[1] === 'number') {
      price = `$${item[1].toFixed(2)}`
    } else {
      price = item[1]
    }

    return (
      <li key={i}>
        <span>{item[0]}</span>
        <span>{price}</span>
        {description}
      </li>
    )
  })

  return (
    <div style={{ marginBottom: '24px' }}>
      <h3 style={{ fontSize: '22px' }}>{heading}</h3>
      <ul className="leaders" style={{ marginBottom: 0 }}>
        {menuItems}
      </ul>
      {children}
    </div>
  )
}

export default MenuSection
