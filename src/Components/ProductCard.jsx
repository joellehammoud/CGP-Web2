
function ProductCard({ product }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="product-card">

        <span className="product-tag">
          {product.tag}
        </span>

        <div className="imgpr">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
          />
        </div>

        <p className="product-type">
          {product.type}
        </p>

        <h3 className="prod-name">
          {product.name}
        </h3>

        <p className="about-product">
          {product.description}
        </p>

        <p className="product-price">
          ${product.price} <sub>USD</sub>
        </p>

      </div>
    </div>
  );
}

export default ProductCard;
