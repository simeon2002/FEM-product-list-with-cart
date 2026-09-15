import products from "./data.json";

export default function App() {
  return (
    <main className="app-container">
      <ProductCategory category="dessert" />
      <Cart />
    </main>
  );
}

function ProductCategory({ category }) {
  return (
    <section className="category">
      <h1 className="category__title">{category[0].toUpperCase() + category.slice(1)}</h1>
      <ul className="category__product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </section>
  );
}

function ProductCard() {
  return (
    <li className="category-item">
      <article className="product product--selected">
        <div className="product__image-container">
          <img src="./assets/images/image-waffle-mobile.jpg" alt="Waffle with berries" className="product__image" />
          <Button className="btn--add-to-cart">Add to Cart</Button>
        </div>
        <div className="product__product-details">
          <span className="product__sub-category">Waffle</span>
          <h2 className="product__title">Waffle with Berries</h2>
          <p className="product__price">$6.50</p>
        </div>
      </article>
    </li>
  );
}

function Button({ children, className = "" }) {
  return <button className={`btn ${className}`}>{children}</button>;
}

function ItemCount() {}

function Cart() {
  return (
    <aside className="cart">
      <h2 className="cart__title">Your Cart(7)</h2>
      <ul className="cart__items-list">
        <CartItem>Classic Tiramisu</CartItem>
        <CartItem>Classic Tiramisu</CartItem>
        <CartItem>Classic Tiramisu</CartItem>
      </ul>
      <div className="cart__total-container">
        <p>Order Total</p>
        <p className="cart__total">$46.50</p>
      </div>
      <div className="cart__carbon-message">
        <p>
          🌲 This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <Button className="btn--primary">Confirm Order</Button>
    </aside>
  );
}

function CartItem({ children }) {
  return (
    <li className="cart-item">
      <div className="cart-item__details">
        <h3 className="cart-item__title">{children}</h3>
        <span className="cart-item__count">1x</span>
        <span className="cart-item__price">@ $5.50</span>
        <span className="cart-item__price-total">@ $5.50</span>
      </div>
      <Button className="btn--remove">❎</Button>
    </li>
  );
}

function OrderConfirmedModal() {
  return;
}
