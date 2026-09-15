import { useState } from "react";
import products from "./data.json";

export default function App() {
  const productList = products;
  const [cartItems, setCartItems] = useState([]);

  return (
    <main className="app-container">
      <ProductCategory category="dessert" productList={productList} />
      <Cart cartItems={cartItems} />
    </main>
  );
}

function ProductCategory({ category, productList }) {
  return (
    <section className="category">
      <h1 className="category__title">{category[0].toUpperCase() + category.slice(1)}</h1>
      <ul className="category__product-list">
        {productList.map(product => (
          <ProductCard product={product} />
        ))}
      </ul>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <li className="category-item">
      <article className="product product--selected">
        <div className="product__image-container">
          <picture>
            <source srcSet={product.image.desktop} media="(min-width: 90em)" />
            <source srcSet={product.image.tablet} media="(min-width: 48em)" />
            <img src={product.image.mobile} alt="Waffle with berries" className="product__image" />
          </picture>
          <Button className="btn--add-to-cart">
            <img src="./assets/images/icon-add-to-cart.svg" alt="" className="icon icon-add-to-cart" /> Add to Cart
          </Button>
        </div>
        <div className="product__product-details">
          <span className="product__sub-category">{product.category}</span>
          <h2 className="product__title">{product.name}</h2>
          <p className="product__price">${product.price}</p>
        </div>
      </article>
    </li>
  );
}

function Button({ children, className = "" }) {
  return <button className={`btn ${className}`}>{children}</button>;
}

function ItemCount() {}

function Cart({ cartItems }) {
  return (
    <aside className="cart">
      <h2 className="cart__title">Your Cart (7)</h2>
      {!cartItems.length && (
        <div className="cart--empty">
          <img src="./assets/images/illustration-empty-cart.svg" alt="Empty cart" />
          <p>your added items will appear here</p>
        </div>
      )}

      {!!cartItems.length && (
        <>
          <CartList cartItems={cartItems} />
          <div className="cart__total-container">
            <p>Order Total</p>
            <p className="cart__total">$46.50</p>
          </div>
          <div className="cart__carbon-message">
            <img src="./assets/images/icon-carbon-neutral.svg" alt="" className="icon icon-tree" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <Button className="btn--primary">Confirm Order</Button>
        </>
      )}
    </aside>
  );
}

function CartList({ cartItems }) {
  return (
    <ul className="cart__items-list">
      {cartItems.map}
      <CartItem>Classic Tiramisu</CartItem>
      <div className="cart__divider"></div>
      <CartItem>Classic Tiramisu</CartItem>
      <div className="cart__divider"></div>
      <CartItem>Classic Tiramisu</CartItem>
      <div className="cart__divider"></div>
    </ul>
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
      <Button className="btn--remove">
        <img src="./assets/images/icon-remove-item.svg" alt="" className="icon icon-remove" />
      </Button>
    </li>
  );
}

function OrderConfirmedModal() {
  return;
}
