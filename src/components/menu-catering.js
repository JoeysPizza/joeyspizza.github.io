import React from 'react'
import MenuSection from './menu-section'

const CateringMenu = () => (
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
            heading="Mostaccioli"
            items={[
              ['Half Tray', 44, '(serves 7-10)'],
              ['Full Tray', 88, '(serves 15-20)'],
            ]}
          />

          <MenuSection
            heading="Baked Mostaccioli with Ricotta"
            items={[
              ['Half Tray', 59, '(serves 7-10)'],
              ['Full Tray', 98, '(serves 15-20)'],
            ]}
          />

          <MenuSection
            heading="Cheese Ravioli"
            items={[['30 Pieces', 55], ['60 Pieces', 105]]}
          />

          <MenuSection
            heading="Tortellini"
            items={[
              ['Half Tray', 49, '(serves 7-10)'],
              ['Full Tray', 98, '(serves 15-20)'],
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
            heading="Meatballs"
            items={[['Half Tray', 40, '(20 pieces)'], ['Full Tray', 80, '(40 pieces)']]}
          />

          <MenuSection
            heading="Italian Sausage"
            items={[['5 pounds', 43], ['10 pounds', 73]]}
          >
            <p className="small font-italic">
              Served with Sweet Peppers &amp; Marinara Sauce
            </p>
          </MenuSection>

          <MenuSection
            heading="Homemade Beef and Gravy"
            items={[
              ['Beef', '$18.50 a pound'],
              ['French Bread', '$3.95 a loaf'],
            ]}
          />

          <MenuSection
            heading="Tossed Salad"
            items={[
              ['Half Tray', 24, '(serves 7-10)'],
              ['Full Tray', 40, '(serves 15-20)'],
            ]}
          />

          <MenuSection
            heading="Hot or Sweet Peppers"
            items={[['1/2 Pint', 2.75], ['Pint', 5], ['Quart', 8]]}
          />
        </div>
      </div>
    </div>
  </div>
)

export default CateringMenu
