import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom';

it('should renders correctly to Home page', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('do not contain Fred’s Calculator', () => {
  render(<Home />);
  expect(screen.queryByText('Fred’s Calculator')).not.toBeInTheDocument();
});
