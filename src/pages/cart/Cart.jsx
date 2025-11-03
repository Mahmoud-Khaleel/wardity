import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);

  const itemsPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      <div className="flex-1 bg-white shadow-md rounded-xl p-5">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.productId}
                className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-contain border rounded-lg"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    {item.size && (
                      <p className="text-sm text-gray-600">
                        Size: <span className="font-medium">{item.size}</span>
                      </p>
                    )}
                    {item.color && (
                      <p className="text-sm text-gray-600">
                        Color: <span className="font-medium">{item.color}</span>
                      </p>
                    )}
                    <p className="text-green-600 text-sm font-medium mt-1">
                      In Stock
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      className="border px-2 rounded hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-2 font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      className="border px-2 rounded hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    $ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right mt-4">
              <p className="text-lg font-semibold">
                Subtotal ({cart.length} item{cart.length > 1 && "s"}):{" "}
                <span className="text-hover">$ {itemsPrice.toFixed(2)}</span>
              </p>
              <button
                onClick={clearCart}
                className="mt-3 bg-secondary text-white px-4 py-2 rounded hover:bg-hover"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>

      {cart.length > 0 && (
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-xl p-5 h-fit">
          <p className="text-lg font-medium mb-3">
            Subtotal ({cart.length} item{cart.length > 1 && "s"}):{" "}
            <span className="font-semibold text-hover">
              $ {itemsPrice.toFixed(2)}
            </span>
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-secondary hover:bg-hover text-white font-medium py-2 rounded"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
