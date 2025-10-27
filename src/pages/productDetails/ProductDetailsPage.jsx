import AddProductToCart from "./components/AddProductToCart";
import ProductDescription from "./components/ProductDescription";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import ProductReviews from "./components/ProductReviews";
import SimilarProducts from "./components/SimilarProducts";

function ProductDetailsPage() {
  const product = {
    title: "New modern sofa is here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quis eos vero est illo necessitatibus asperiores, inventore iusto dolorum, quibusdam adipisci temporibus iste doloremque nostrum architecto. Recusandae tenetur maxime repudiandae.",
    date: "Sep 26, 2022",
    by: "soroush norozy",
    favoriteNumber: 5,
    messageNumber: 5,
    category: "Newest, sofa and chair, wooden",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
      "https://plus.unsplash.com/premium_photo-1672136336540-2dd39fd4d1e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=928",
    ],
    price: 299.99,
  };
  const similarProducts = Array.from({ length: 4 }, () => product);

  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-10 my-10 gap-15">
      <div className="w-full md:w-2/3">
        <ProductImages product={product} />
        <ProductInfo product={product} />
        <ProductDescription product={product} />
        <AddProductToCart />
        <ProductReviews />
      </div>

      <div className="w-full md:w-1/3 rounded-lg">
        <SimilarProducts similarProducts={similarProducts} />
      </div>
    </div>
  );
}

export default ProductDetailsPage;
