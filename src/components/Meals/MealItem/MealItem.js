import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toFixed(2)}€`;
  const history = useHistory();

  const addToCartHandler = (amount) => {
    cartCtx.addItem(
      {
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      },
      amount
    );
  };

  const goToDetails = (id) => {
    history.push({
      pathname: `/${id}`,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>

        <div className={classes.price}>{price}</div>
        <div>
          <button
            className={classes['btn-details']}
            onClick={() => goToDetails(props.id)}
          >
            Dettagli
          </button>
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
