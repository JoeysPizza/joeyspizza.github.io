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
              ['Small (10″)', 9.95],
              ['Medium (12″)', 13],
              ['Large (14″)', 15],
              ['Extra Large (16″)', 17],
            ]}
          >
            <p className="small font-italic">Pizza by the slice is $4.00</p>
          </MenuSection>

          <MenuSection
            heading="Deep Dish Cheese Pizza"
            items={[
              ['Small (10″)', 12],
              ['Medium (12″)', 15.5],
              ['Large (14″)', 18.5],
            ]}
          />

          <h4 style={{ fontSize: '18px' }}>Extra Ingredients</h4>

          <ul
            className="list-unstyled"
            style={{ columnCount: 2, marginBottom: '8px' }}
          >
            <li>10″ - $1.50</li>
            <li>12″ - $1.90</li>
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
              ['Homemade Italian Beef', 7.5],
              ['Italian Sausage', 6.5],
              ['Combo (Beef & Sausage)', 8.5],
              ['Char-Broil Steak Sandwich', 9.25],
              ['Philly Cheese Steak', 9.25],
              ['Chicago Vienna Hot Dog with Fries', 4],
              ['Maxwell Street Polish with Fries', 5.5],
              ['Chicken Sandwich', 6],
              ['Fish Sandwich with Fries', 6],
              ['Italian Breaded Steak', 9.25],
              ['Chicken Parmesan', 7],
              ['Meatball', 7],
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
            items={[
              ['5 Pieces with Fries', 8.99],
              ['10 Pieces with Fries', 15.00],
              ['20 Pieces with Fries', 25.00]
            ]}
          >

            <p className="small font-italic">
              Additional pieces for $1.50
            </p>
          </MenuSection>

          <MenuSection
            heading="Side Orders"
            items={[
              ['French Fries', 2.95],
              ['Cheese Fries', 3.25],
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
              ['Cans', 1.36],
              ['1 Liter Pop', 2.5],
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
