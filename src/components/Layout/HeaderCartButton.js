import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCart.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Il Tuo Carrello</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
