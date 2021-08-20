import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';

it('match the snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly to App page', () => {
  render(<App />);
  expect(screen.getByText('Fred’s Calculator')).toBeInTheDocument();
});

it("doesn't contain Welcome to our page!", () => {
  render(<App />);
  expect(screen.queryByText('Welcome!')).not.toBeInTheDocument();
});
