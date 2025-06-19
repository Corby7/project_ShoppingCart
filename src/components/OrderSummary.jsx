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
      <h2>${totalPriceIncl.toFixed(2)}</h2>
      <span>
        <h4>Subtotal ({totalQuantity} items)</h4>
        <h4>${totalPriceExcl.toFixed(2)}</h4>
      </span>
      <span>
        <h4>Vat (21%)</h4>
        <h4>${vatAmount.toFixed(2)}</h4>
      </span>
      <hr />
      <span>
        <h2>Total</h2>
        <h2>${totalPriceIncl.toFixed(2)}</h2>
      </span>
      <button>Checkout</button>
    </div>
  );
}
