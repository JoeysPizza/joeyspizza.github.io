import React from 'react'
import MenuSection from './menu-section'

const Menu = () => (
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
              ['Small (10″)', 8.95],
              ['Medium (12″)', 12],
              ['Large (14″)', 14],
              ['Large (16″)', 16.5],
            ]}
          >
            <p className="small font-italic">Pizza by the slice is $3.50</p>
          </MenuSection>

          <MenuSection
            heading="Deep Dish Cheese Pizza"
            items={[
              ['Small (10″)', 11],
              ['Medium (12″)', 14.5],
              ['Large (14″)', 17.5],
            ]}
          />

          <h4 style={{ fontSize: '18px' }}>Extra Ingredients</h4>

          <ul
            className="list-unstyled"
            style={{ columnCount: 2, marginBottom: '8px' }}
          >
            <li>10″ - $1.50</li>
            <li>12″ - $1.00</li>
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
          </ul>

          <MenuSection
            heading="Pastas"
            items={[
              ['Ravioli', 9.5],
              ['Gnocchi', 9.5],
              ['Tortellini', 9.5],
              ['Spaghetti', 8],
              ['Rigatoni', 8],
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
                7,
                'Romaine lettuce, tomato, & parmesan cheese',
              ],
              [
                "Caruso's Salad",
                7,
                'Lettuce, tomato, salami, black olives, pepperoncinis, provolone, garlic, and italian dressing',
              ],
            ]}
          />

          <MenuSection
            heading="Burgers"
            items={[
              ['Hamburger with Fries', 5],
              ['Cheeseburger with Fries', 5.5],
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
              ['Homemade Italian Beef', 6.5],
              ['Italian Sausage', 5.25],
              ['Combo (Beef & Sausage)', 7.5],
              ['Char-Broil Steak Sandwich', 7.5],
              ['Philly Cheese Steak', 7.5],
              ['Chicago Vienna Hot Dog with Fries', 3.75],
              ['Maxwell Street Polish with Fries', 4.5],
              ['Chicken Sandwich', 6],
              ['Fish Sandwich with Fries', 6],
              ['Italian Breaded Steak', 7.5],
              ['Chicken Parmesan', 7],
              ['Meatball', 6],
              ['Pepper & Eggs Sandwich', 5.5],
              ['Egg Plant Sandwich', 6],
              ['Italian Sub', 7],
            ]}
          >
            <p className="small font-italic">
              Cheese, Sweet, or Hot Peppers $0.50
            </p>
          </MenuSection>

          <MenuSection
            heading="Chicken Wings"
            items={[['5 Pieces with Fries', 6.99]]}
          />

          <MenuSection
            heading="Side Orders"
            items={[
              ['French Fries', 2.45],
              ['Cheese Sticks', 3.95],
              ['Onion Rings', 3.95],
              ['Chicken Tenders', 4.5],
              ['Garlic Bread', 1.75],
              ['Gravy Bread', 1.5],
            ]}
          />

          <MenuSection heading="Italian Desserts" items={[['Cannoli', 3]]} />

          <MenuSection
            heading="Beverages"
            items={[
              ['Cans', 1],
              ['1 Liter Pop', 1.95],
              ['20 Oz. Fountain', 1.75],
              ['Water', 1],
            ]}
          />
        </div>
      </div>
    </div>
  </div>
)

export default Menu
