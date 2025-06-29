import "./OrderSummary.css";

export default function OrderSummary({
  totalPriceExcl = 0,
  totalQuantity = 0,
}) {
  const vatAmount = totalPriceExcl * 0.21;
  const totalPriceIncl = totalPriceExcl + vatAmount;

  return (
    <div className="ordersummary-container">
      <h2>Order summary</h2>
      <h2>₽{totalPriceIncl.toFixed(2)}</h2>
      <span className="sub-vat">
        <span className="left-right">
          <h5>Subtotal ({totalQuantity} items)</h5>
          <h5>₽{totalPriceExcl.toFixed(2)}</h5>
        </span>
        <span className="left-right">
          <h5>Vat (21%)</h5>
          <h5>₽{vatAmount.toFixed(2)}</h5>
        </span>
        <hr />
        <span className="left-right">
          <h2>Total</h2>
          <h2>₽{totalPriceIncl.toFixed(2)}</h2>
        </span>
      </span>

      <button id="checkout-btn">
        <h3>Checkout</h3>
      </button>
    </div>
  );
}
