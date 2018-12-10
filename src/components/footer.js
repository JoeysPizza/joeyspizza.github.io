import React from 'react'
import iconFacebook from '../images/svg/facebook.svg'
import iconYelp from '../images/svg/yelp.svg'
import iconGoogle from '../images/svg/google.svg'
import iconUberEats from '../images/svg/uber-eats.svg'

const Footer = () => (
  <footer className="container" style={{ margin: '20px auto' }}>
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
        <div style={{ margin: '16px 0' }}>
          <a
            href="https://www.facebook.com/JOEYS-PIZZA-828018194256001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconFacebook}
              alt="joeys pizza on facebook"
              style={{ width: '50px', marginRight: '20px' }}
            />
          </a>
          <a
            href="https://goo.gl/maps/5HYdAwkcu8m"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconGoogle}
              alt="joeys pizza on google maps"
              style={{ width: '50px', marginRight: '13px' }}
            />
          </a>
          <a
            href="https://www.yelp.com/biz/joey-s-pizza-hillside"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconYelp}
              alt="joeys pizza on yelp"
              style={{ width: '50px' }}
            />
          </a>
        </div>
      </div>

      <div className="col-md">
        <h2>Order Delivery</h2>
        <p>Joeys Pizza is on Uber Eats!</p>
        <a
          href="https://www.ubereats.com/en-US/chicago/food-delivery/joeys-pizza/WGpsHfz6SNKzBm312STpbg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={iconUberEats}
            alt="joeys pizza on uber eats"
            style={{ width: '150px', paddingTop: '6px' }}
          />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
