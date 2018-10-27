import React from 'react'

function displaySection(heading, items) {
  const menuItems = items.map((item, i) => (
    <li key={i}>
      <span>{item[0]}</span>
      <span>${item[1].toFixed(2)}</span>
    </li>
  ))
  return (
    <div>
      <h3 style={{ fontSize: '22px' }}>{heading}</h3>
      <ul className="leaders">{menuItems}</ul>
    </div>
  )
}

const Menu = () => (
  <div>
    <h1
      className="text-center"
      style={{
        marginBottom: '40px',
        color: '#a60512',
      }}
    >
      Our Menu
    </h1>

    <div className="row">
      <div className="col-md">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div style={{ width: '350px', marginBottom: '40px' }}>
            {displaySection('Pizza', [
              ['Small (10″)', 8.95],
              ['Medium (12″)', 12],
              ['Large (14″)', 14],
              ['Large (16″)', 16.5],
            ])}

            <h4 style={{ fontSize: '18px' }}>Extra Ingredients</h4>

            <ul
              className="list-unstyled"
              style={{ columnCount: 2, marginBottom: '5px' }}
            >
              <li>10″ - $1.50</li>
              <li>12″ - $1.00</li>
              <li>14″ - $2.00</li>
              <li>16″ - $2.00</li>
            </ul>
            <p style={{ marginBottom: '5px' }}>Your choice of:</p>
            <ul
              className="list-unstyled"
              style={{ columnCount: 2, marginBottom: '4px' }}
            >
              <li>Sausage</li>
              <li>Mushroom</li>
              <li>Green Pepper</li>
              <li>Onion</li>
              <li>Tomato</li>
              <li>Pepperoni</li>
              <li>Hot Pepper</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div style={{ width: '350px' }}>
            {displaySection('Pastas', [
              ['Ravioli', 9.5],
              ['Gnocchi', 9.5],
              ['Tortellini', 9.5],
              ['Spaghetti', 8],
              ['Rigatoni', 8],
            ])}

            {displaySection('Sandwich', [
              ['Homemade Italian Beer', 6.5],
              ['Italian Sausage', 5.25],
              ['Combo (Beef & Sausage', 7.5],
              ['Char-Broil Steak Sandwich', 7.5],
              ['Philly Cheese Steak', 7.5],
              ['Chicago Vienna Hot Dog with Fries', 3.75],
              ['Maxwell Street Polish with Fries', 4.5],
              ['Chicken Sandwich', 6],
              ['Fish Sandwich with Fries', 6],
            ])}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Menu
