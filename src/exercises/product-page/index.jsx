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
        <Link className="back-link" to="/">
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
          className={`${isFiltersVisible ? 'products__filter' : 'products__filter--hidden'}`}
          id="filter"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="maxPrice">Max price</label>
          <input
            defaultValue={maxPrice}
            id="maxPrice"
            max={1000000}
            min={0}
            type="number"
            {...register('maxPrice')}
          />
          <label htmlFor="minPrice">Min price</label>
          <input
            defaultValue={minPrice}
            id="minPrice"
            max={1000000}
            min={0}
            type="number"
            {...register('minPrice')}
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            defaultValue={quantity}
            id="quantity"
            max={100}
            min={0}
            type="number"
            {...register('quantity')}
          />
          <button type="submit">Get products</button>
        </form>
        {!isLoading ? (
          <div className="product__list">
            {data?.map((d) => {
              return (
                <div className="product__card" key={d.id}>
                  {d.name}
                  <div>{formatter.format(d.price)}</div>
                  <img
                    alt={d.description}
                    className="product__img"
                    src={d.images[0].url}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loader">
            <img alt="Loading..." src="loading-gif.gif" />
          </div>
        )}
      </section>
    </div>
  );
}
