import React, { useState } from "react";
import products from "./data.json";

export default function App() {
  const productList = products;
  const [cartItems, setCartItems] = useState([]);

  function handleAddItem(item) {
    console.log(item);
    console.log(cartItems);

    const getItemIdx = (items, itemToFind) => items.findIndex(item => item.name === itemToFind.name);

    setCartItems(cartItems => {
      const itemIdx = getItemIdx(cartItems, item);

      if (itemIdx === -1) return [...cartItems, { ...item, count: 1 }];

      return cartItems.map(cartItem => (cartItem.name === item.name ? { ...cartItem, count: cartItem.count++ } : cartItem));
    });
  }

  return (
    <main className="app-container">
      <ProductCategory category="dessert" productList={productList} onAddItem={handleAddItem} />
      <Cart cartItems={cartItems} />
    </main>
  );
}

function ProductCategory({ category, productList, onAddItem }) {
  return (
    <section className="category">
      <h1 className="category__title">{category[0].toUpperCase() + category.slice(1)}</h1>
      <ul className="category__product-list">
        {productList.map(product => (
          <ProductCard product={product} onAddItem={onAddItem} key={product.name} />
        ))}
      </ul>
    </section>
  );
}

function ProductCard({ product, onAddItem }) {
  return (
    <li className="category-item">
      <article className="product product--selected">
        <div className="product__image-container">
          <picture>
            <source srcSet={product.image.desktop} media="(min-width: 90em)" />
            <source srcSet={product.image.tablet} media="(min-width: 48em)" />
            <img src={product.image.mobile} alt="Waffle with berries" className="product__image" />
          </picture>
          <Button className="btn--add-to-cart" onClick={() => onAddItem(product)}>
            <img src="./assets/images/icon-add-to-cart.svg" alt="" className="icon icon-add-to-cart" />
            Add to Cart
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

function Button({ children, className = "", onClick = () => {} }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
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
      {cartItems.map(item => (
        <React.Fragment key={item.name}>
          <CartItem item={item}>{item.name}</CartItem>
          <div className="cart__divider"></div>
        </React.Fragment>
      ))}
    </ul>
  );
}

function CartItem({ item, children }) {
  const itemTotal = item.count * item.price;

  return (
    <li className="cart-item">
      <div className="cart-item__details">
        <h3 className="cart-item__title">{children}</h3>
        <span className="cart-item__count">{item.count}x</span>
        <span className="cart-item__price">@ ${item.price}</span>
        <span className="cart-item__price-total">@ ${itemTotal}</span>
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
