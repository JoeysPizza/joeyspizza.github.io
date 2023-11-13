import React from 'react'
import MenuSection from './menu-section'

export default function Menu() {
  return (
    <div className="row">
      <div className="col-md">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <div style={{ width: '350px' }}>
            <MenuSection
              heading="Cheese Pizza"
              items={[
                ['Small (10″)', 10.95],
                ['Medium (12″)', 14],
                ['Large (14″)', 16],
                ['Extra Large (16″)', 18.5],
              ]}
            >
              <p className="small font-italic">Pizza by the slice is $4.00</p>
            </MenuSection>

            <MenuSection
              heading="Deep Dish Cheese Pizza"
              items={[
                ['Small (10″)', 13],
                ['Medium (12″)', 16.5],
                ['Large (14″)', 19.5],
              ]}
            />

            <h4 style={{ fontSize: '18px' }}>Extra Ingredients</h4>

            <ul
              className="list-unstyled"
              style={{ columnCount: 2, marginBottom: '8px' }}
            >
              <li>10″ - $1.50</li>
              <li>12″ - $2.00</li>
              <li>14″ - $2.00</li>
              <li>16″ - $2.00</li>
            </ul>
            <p style={{ marginBottom: '8px' }}>Your choice of:</p>
            <ul
              className="list-unstyled"
              style={{ columnCount: 2, marginBottom: '24px' }}
            >
              <li>Sausage</li>
              <li>Mushroom</li>
              <li>Green Pepper</li>
              <li>Onion</li>
              <li>Tomato</li>
              <li>Pepperoni</li>
              <li>Hot Pepper</li>
              <li>Black Olives</li>
              <li>Spinach</li>
            </ul>

            <MenuSection
              heading="Pastas"
              items={[
                ['Ravioli', 11.25],
                ['Gnocchi', 11.25],
                ['Tortellini', 11.25],
                ['Spaghetti', 9.75],
                ['Rigatoni', 9.75],
              ]}
            >
              <p className="small font-italic">
                All pastas served with one sausage or meatball <br />
                Any extra sausage or meatball $1.75
              </p>
            </MenuSection>

            <MenuSection
              heading="Salads"
              items={[
                [
                  'Chicken Salad',
                  8,
                  'Romaine lettuce, tomato, & parmesan cheese',
                ],
                [
                  "Caruso's Salad",
                  8,
                  'Lettuce, tomato, salami, black olives, pepperoncinis, provolone, garlic, and italian dressing',
                ],
              ]}
            />

            <MenuSection
              heading="Burgers"
              items={[
                ['Hamburger with Fries', 6],
                ['Cheeseburger with Fries', 6.5],
              ]}
            />
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
            <MenuSection
              heading="Sandwiches"
              items={[
                ['Homemade Italian Beef', 7.95],
                ['Italian Sausage', 7.5],
                ['Combo (Beef & Sausage)', 8.95],
                ['Char-Broil Steak Sandwich', 9.25],
                ['Philly Cheese Steak', 9.25],
                ['Chicago Vienna Hot Dog with Fries', 5],
                ['Maxwell Street Polish with Fries', 6],
                ['Chicken Sandwich', 6],
                ['Fish Sandwich with Fries', 6],
                ['Italian Breaded Steak', 9.25],
                // ['Chicken Parmesan', 7],
                ['Meatball', 7.5],
                ['Pepper & Eggs Sandwich', 6.75],
                // ['Egg Plant Sandwich', 6],
                // ['Italian Sub', 7],
              ]}
            >
              <p className="small font-italic">
                Cheese, Sweet, or Hot Peppers $0.50
              </p>
            </MenuSection>

            <MenuSection
              heading="Chicken Wings"
              items={[
                ['5 Pieces with Fries', 8.99],
                ['10 Pieces with Fries', 15.0],
                ['20 Pieces with Fries', 25.0],
              ]}
            >
              <p className="small font-italic">Additional pieces for $1.50</p>
            </MenuSection>

            <MenuSection
              heading="Side Orders"
              items={[
                ['French Fries', 3.65],
                // ['Cheese Fries', 3.95],
                ['Cheese Sticks', 3.95],
                ['Onion Rings', 3.95],
                // ['Chicken Tenders', 4.5],
                ['Garlic Bread', 1.75],
                // ['Gravy Bread', 1.5],
              ]}
            />

            {/* <MenuSection heading="Italian Desserts" items={[['Cannoli', 3]]} /> */}

            <MenuSection
              heading="Beverages"
              items={[
                ['Cans', 1.5],
                ['1 Liter Pop', 2.75],
                ['20 Oz. Fountain', 1.95],
                ['Water', 1],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
