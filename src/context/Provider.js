import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RevenueContext from './RevenueContext';
// import ApiPageFoods from '../services/ApiPageFoods';
// import ApiPageDrinks from '../services/ApiPageDrinks';

const Provider = ({ children }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [search, setSearch] = useState(false);
  const [searchButton, setSearchButton] = useState(true);
  const [searchParam, setSearchParam] = useState('Meal');
  const [foods, setFoods] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchApi = async (URL) => {
    setisLoading(true);
    const response = await fetch(URL);
    const json = await response.json();
    setisLoading(false);
    console.log(json);
    if (searchParam === 'Drink') {
      if (json.drinks) {
        setFoods(json.drinks);
      } else if (json.ingredients) {
        setSearchParam('Ingredients');
        setFoods(json.ingredients);
      } else {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
    }
    if (searchParam === 'Meal') {
      if (json.meals) {
        setFoods(json.meals);
      } else if (json.ingredients) {
        setSearchParam('Ingredients');
        setFoods(json.ingredients);
      } else {
        alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      }
    }
  };
  // const [drinks, setDrinks] = useState([]);
  // //
  // const fetchFoods = async () => {
  //   const foodsFromApi = await ApiPageFoods();
  //   setFoods(foodsFromApi.categories);
  // };
  // //
  // const fetchDrinks = async () => {
  //   const drinksFromApi = await ApiPageDrinks();
  //   setDrinks(drinksFromApi.categories);
  // };
  const context = {
    email,
    password,
    setEmail,
    setPassword,
    search,
    setSearch,
    searchButton,
    setSearchButton,
    searchParam,
    setSearchParam,
    //
    foods,
    setFoods,
    fetchApi,
    isLoading,
    setisLoading,
    // fetchFoods,
    // //
    // drinks,
    // setDrinks,
    // fetchDrinks,
  };

  return (
    <RevenueContext.Provider value={ context }>
      {children}
    </RevenueContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Provider;