import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Card from '../UI/Card';
import classes from './MealDetails.module.css';
import config from '../../config/config';

const MealDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const { id } = params;
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${config.SERVER_URL}/products/${id}`);

      if (!response.ok) {
        throw new Error('Qualcosa non ha funzionato!');
      }

      const responseData = await response.json();
      setProduct(responseData);
    };

    fetchProduct().catch((error) => {
      console.log('error', error);
    });
  }, [id]);

  const goToMenu = (id) => {
    history.push({
      pathname: `/`,
    });
  };

  return (
    <section className={classes.meal}>
      <Card>
        <button className={classes['btn-menu']} onClick={goToMenu}>
          Menu
        </button>
        <h1> {product.name}</h1>
        <img src={product.url} alt="Margherita" />
        <div className={classes.description}> {product.description}</div>
      </Card>
    </section>
  );
};

export default MealDetails;
