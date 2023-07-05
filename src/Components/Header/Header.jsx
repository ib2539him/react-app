
import './Header.css'
export const Header = () => {
  return (
      <div className="Header">
          <h1>ema-jhon</h1>

          <nav>
          <ul>
            <li><a className='active' href="/shop">Shop</a></li>
            <li><a href="/review">Order Review</a></li>
            <li><a href="/manage">Manage Inventory</a></li>
          </ul></nav>
      </div>
  )
}
