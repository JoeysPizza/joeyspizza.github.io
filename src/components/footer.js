import React from 'react'

const Footer = () => (
  <div className="container" style={{ margin: '20px auto' }}>
    <div className="row">
      <div className="col-md">
        <h2>Contact</h2>
        <p>
          Joeys Pizza <br />
          1801 S Wolf Rd, Hillside, IL 60162
          <br />
          <a href="tel:+17085933939" style={{ color: '#650205' }}>
            (708) 593-3939
          </a>
        </p>
      </div>

      <div className="col-md">
        <h2>Hours</h2>
        <table
          className="table table-sm table-borderless table-hours"
          style={{ maxWidth: '350px' }}
        >
          <tbody>
            <tr>
              <td>Sun</td>
              <td>12:00 pm - 8:00 pm</td>
            </tr>
            <tr>
              <td>Mon</td>
              <td>10:30 am - 10:00 pm</td>
            </tr>
            <tr>
              <td>Tue</td>
              <td>10:30 am - 10:00 pm</td>
            </tr>
            <tr>
              <td>Wed</td>
              <td>10:30 am - 10:00 pm</td>
            </tr>
            <tr>
              <td>Thu</td>
              <td>10:30 am - 10:00 pm</td>
            </tr>
            <tr>
              <td>Fri</td>
              <td>10:30 am - 10:00 pm</td>
            </tr>
            <tr>
              <td>Sat</td>
              <td>10:30 am - 10:00 pm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-md">
        <h2>Links</h2>
        <a href="https://goo.gl/maps/5HYdAwkcu8m">Joeys Pizza on Google Maps</a>
      </div>
    </div>
  </div>
)

export default Footer
