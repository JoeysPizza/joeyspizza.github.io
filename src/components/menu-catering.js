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
              ['Half Tray', 21.95, '(serves 7-10)'],
              ['Full Tray', 35, '(serves 15-20)'],
            ]}
          />

          <MenuSection
            heading="Baked Mostaccioli with Ricotta"
            items={[
              ['Half Tray', 31.95, '(serves 7-10)'],
              ['Full Tray', 54, '(serves 15-20)'],
            ]}
          />

          <MenuSection
            heading="Cheese Ravioli"
            items={[['30 Pieces', 55.99], ['60 Pieces', 105]]}
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
              ['Beef', '$9.50 a pound'],
              ['French Bread', '$2.45 a loaf'],
            ]}
          />

          <MenuSection
            heading="Tossed Salad"
            items={[
              ['Half Tray', 14, '(serves 7-10)'],
              ['Full Tray', 24, '(serves 15-20)'],
            ]}
          />

          <MenuSection
            heading="Hot or Sweet Peppers"
            items={[['1/2 Pint', 1.75], ['Pint', 3], ['Quart', 5.5]]}
          />
        </div>
      </div>
    </div>
  </div>
)

export default CateringMenu
