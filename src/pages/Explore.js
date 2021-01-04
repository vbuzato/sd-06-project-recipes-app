import React from 'react';
import { Link } from 'react-router-dom';

export default function Explore() {
  return (
    <div className="container">
      <Link to="/explorar/comidas">
        <button
          type="button"
          data-testid="explore-food"
          className="bt-login bt-space font-app"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-drinks"
          className="bt-login bt-space font-app"
        >
          Explorar Bebidas
        </button>
      </Link>
    </div>
  );
}
