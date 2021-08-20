import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';
import '@testing-library/jest-dom';

it('should renders correctly to Quote component', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('doest not contain Welcome!', () => {
  render(<Quote />);
  expect(screen.queryByText('Welcome!')).not.toBeInTheDocument();
});
