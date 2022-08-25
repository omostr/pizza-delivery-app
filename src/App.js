import { useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import MealDetails from './components/Meals/MealDetails';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Switch>
          <Route path="/" exact>
            <Meals />
          </Route>
          <Route path="/:id" exact>
            <MealDetails />
          </Route>
        </Switch>
      </main>
    </CartProvider>
  );
}

export default App;
