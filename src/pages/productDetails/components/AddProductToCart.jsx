import LoadingButton from "../../../components/LoadingButton";
import ProductQuantityProvider from "../context/productQuantity/ProductQuantityProvider";
import ProductQuantity from "./ProductQuantity";
import useProduct from "../context/product/useProduct";

export default function AddProductToCart({ product }) {
  const { setProduct } = useProduct();
  const handleSubmit = () => {
    setProduct((prev) => {
      return { ...prev, rating: 3 };
    });
    return new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <ProductQuantityProvider>
      <div className="flex justify-center items-center gap-5">
        <ProductQuantity product={product} />
        <LoadingButton
          title="Add to Cart"
          onClick={handleSubmit}
          width="50%"
          style={{
            margin: "2rem auto",
          }}
        />
      </div>
    </ProductQuantityProvider>
  );
}
