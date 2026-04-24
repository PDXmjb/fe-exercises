import { Link } from 'react-router-dom';
import './styles.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useProductsQuery } from '../../query/ProductsQuery';

export default function ProductPage() {
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [minPrice, setMinPrice] = useState(0);
  const [quantity, setQuantity] = useState(10);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  // TODO: add broken face when products query errors
  const { data, isLoading } = useProductsQuery({
    quantity,
    priceMax: maxPrice,
    priceMin: minPrice,
  });

  // TODO: add product detail page when clicking on a product.

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    trailingZeroDisplay: 'stripIfInteger',
  });

  const filterDisplayHandler = () => setIsFiltersVisible((v) => !v);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data) => {
    setMaxPrice(Number(data.maxPrice));
    setMinPrice(Number(data.minPrice));
    setQuantity(Number(data.quantity));
    setIsFiltersVisible(false);
  };

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

      <section className="workspace product__page">
        <h1>Products</h1>
        <button
          className="filter__button"
          type="button"
          onClick={filterDisplayHandler}
        >
          Filter
        </button>
        <form
          id="filter"
          className={`${isFiltersVisible ? 'products__filter' : 'products__filter--hidden'}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="maxPrice">Max price</label>
          <input
            id="maxPrice"
            type="number"
            min={0}
            max={1000000}
            defaultValue={maxPrice}
            {...register('maxPrice')}
          />
          <label htmlFor="minPrice">Min price</label>
          <input
            id="minPrice"
            type="number"
            min={0}
            max={1000000}
            defaultValue={minPrice}
            {...register('minPrice')}
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            min={0}
            max={100}
            defaultValue={quantity}
            {...register('quantity')}
          />
          <button type="submit">Get products</button>
        </form>
        {!isLoading ? (
          <div className="product__list">
            {data?.map((d) => {
              return (
                <div key={d.id} className="product__card">
                  {d.name}
                  <div>{formatter.format(d.price)}</div>
                  <img
                    className="product__img"
                    src={d.images[0].url}
                    alt={d.description}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loader">
            <img src="loading-gif.gif" alt="Loading..." />
          </div>
        )}
      </section>
    </div>
  );
}
