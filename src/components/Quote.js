import React from 'react';
import '../styles/Quotes.css';

const Quote = () => (
  <div className="some-quotes">
    <h3 className="quotes-h3">Quotes</h3>
    <p>
      <i>
        {' '}
        It’s fine to work on any problem, so long as it generates interesting
        mathematics along the way — even if you don’t solve it at the end of the
        day. — Andrew Wiles
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
    <br />
    <p>
      <i>
        {' '}
        Mathematics may not teach us to add love or subtract hate, but it gives
        us hope that every problem has a solution. — Anonymous
      </i>
    </p>
  </div>
);

export default Quote;
