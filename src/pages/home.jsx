import React from 'react';
import Categories from '../components/categories';
import PizzaBlock from '../components/pizzaBlock';
import Sort from '../components/sort';

const Home = () => {
  return (
    <div class='content'>
      <div class='container'>
        <div class='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 class='content__title'>Все пиццы</h2>
        <div class='content__items'>
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
          <PizzaBlock />
        </div>
      </div>
    </div>
  );
};

export default Home;
