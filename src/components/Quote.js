import React from 'react';
import '../styles/Quotes.css';

const Quote = () => (
  <div className="some-quotes">
    <h3 className="quotes-h3">Quotes</h3>
    <p>
      <i>
        {' '}
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. –William Paul Thurston
      </i>
    </p>
    <br />
    <p>
      <i>
        {' '}
        Pure mathematics is, in its way, the poetry of logical ideas. — Albert
        Einstein, German theoretical physicist
      </i>
    </p>
    <br />
    <p>
      <i>
        {' '}
        Mathematics allows for no hypocrisy and no vagueness. — Stendhal (pen
        name of Marie-Henri Beyle), French writer
      </i>
    </p>
  </div>
);

export default Quote;
