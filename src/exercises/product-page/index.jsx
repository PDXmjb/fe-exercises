import { Link } from 'react-router-dom';
import './styles.scss';
import { useProductsQuery } from '../../query/ProductsQuery';

export default function ProductPage() {
  const { data, isLoading, error } = useProductsQuery({ quantity: 5 });

  console.log(data, isLoading, error);
  return (
    <div className="exercise">
      <header className="exercise-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>Product Page</h1>
        <p className="difficulty intermediate">Intermediate</p>
      </header>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Display product image, title, and price</li>
          <li>Show product description</li>
          <li>Quantity selector with increment/decrement</li>
          <li>Add to cart button</li>
          <li>Display available sizes or variants</li>
        </ul>
      </section>

      <section className="workspace">
        <div className="product-list">
          {data.map((d) => {
            return (
              <div key={d.id} className="product-card">
                {d.name}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
