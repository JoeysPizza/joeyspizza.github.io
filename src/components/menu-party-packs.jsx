import React from 'react'

const Card = ({ heading, subHeading, price, items }) => {
  const listItems = items.map((item, i) => <li key={i}>{item}</li>)

  return (
    <div className="card card-party-pack" style={{ marginBottom: '20px' }}>
      <div className="card-header">
        <h4>{heading}</h4>
        <p style={{ marginBottom: '8px' }}>{subHeading}</p>
      </div>
      <div className="card-body">
        <p className="text-center" style={{ fontSize: '30px' }}>
          {price}
        </p>
        <ul style={{ paddingLeft: '20px' }}>{listItems}</ul>
      </div>
    </div>
  )
}

const partyPacks = () => (
  <div className="row">
    <div className="col-lg">
      <Card
        heading="Party Pack #1"
        subHeading="Feeds 10-15"
        price="$70.00"
        items={[
          '3 Pounds of Homemade Beef & Gravy',
          '3 Loaves of French Bread',
          '1 Pint Hot Peppers',
          '1 Pint Sweet Peppers',
        ]}
      />
    </div>

    <div className="col-lg">
      <Card
        heading="Party Pack #2"
        subHeading="Feeds 20-25"
        price="$105.00"
        items={[
          '5 Pounds of Homemade Beef & Gravy',
          '5 Loaves of French Bread',
          '1 Pint Hot Peppers',
          '1 Pint Sweet Peppers',
        ]}
      />
    </div>

    <div className="col-lg">
      <Card
        heading="Party Pack #3"
        subHeading="Feeds 40-50"
        price="$400.00"
        items={[
          '10 Pounds of Homemade Beef & Gravy',
          '10 Loaves of French Bread',
          'Full Tray of Mostaccioli',
          'Full Tray of Italian Sausage (40 Pieces)',
          'Full Tray of Tossed Salad',
          '4 Pint Hot Peppers',
          '4 Pint Sweet Peppers',
        ]}
      />
    </div>
  </div>
)

export default partyPacks
