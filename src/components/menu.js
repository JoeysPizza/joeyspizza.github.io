import React from 'react'

const Menu = () => (
<div>
<div className="row">

  <div className="col-md">
    <h2>Pasta</h2>
    <p><i>All pastas are served with one sausage or meatball</i></p>
    <table className="table">
      <tbody>
        <tr><td>Ravioli</td><td>9.50</td></tr>
        <tr><td>Gnocchi</td><td>9.50</td></tr>
        <tr><td>Tortellini</td><td>9.50</td></tr>
        <tr><td>Spaghetti</td><td>8.00</td></tr>
        <tr><td>Rigatoni</td><td>8.00</td></tr>
        <tr><td>Extra Sausage or Meatball</td><td>1.75</td></tr>
      </tbody>
    </table>

  </div>

  <div className="col-md">
    <h2>Sandwiches</h2>
    <table className="table">
      <tbody>
        <tr><td>Breaded Steak</td><td>7.50</td></tr>
        <tr><td>Chicken Parmesan</td><td>7.00</td></tr>
        <tr><td>4 Piece Chicken</td><td>8.50</td></tr>
        <tr><td>Meatball</td><td>6.00</td></tr>
        <tr><td>Cheese, Sweet or Hot Peppers</td><td>.50</td></tr>
        <tr><td>Hamburger</td><td>4.50</td></tr>
        <tr><td>Cheeseburger</td><td>5.00</td></tr>
      </tbody>
    </table>
  </div>

</div>


<div className="row">

  <div className="col-md">
    <h2>Side Orders</h2>
    <table className="table">
      <tbody>
        <tr><td>Cheese Sticks</td><td>3.95</td></tr>
        <tr><td>French Fries</td><td>1.95</td></tr>
        <tr><td>Onion Rings</td><td>3.95</td></tr>
        <tr><td>Chicken Tenders</td><td>4.50</td></tr>
        <tr><td>Garlic Bread</td><td>1.75</td></tr>
      </tbody>
    </table>
  </div>

  <div className="col-md">
    <h2>Beverages</h2>
    <table className="table">
      <tbody>
        <tr><td>Beer</td><td>3.00</td></tr>
        <tr><td>Wine</td><td>3.00</td></tr>
        <tr><td>Soda</td><td>1.00</td></tr>
        <tr><td>Coffee</td><td>1.00</td></tr>
      </tbody>
    </table>
  </div>

</div>


<div className="row">

  <div className="col-md">
    <h2>Italian Desserts</h2>
    <table className="table">
      <tbody>
        <tr><td>Connoli</td><td>3.00</td></tr>
        <tr><td>Pasticciotti</td><td>3.00</td></tr>
        <tr><td>Eclairs</td><td>3.00</td></tr>
      </tbody>
    </table>
  </div>

  <div className="col-md">
  </div>
</div>
</div>
)

export default Menu
