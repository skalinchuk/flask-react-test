import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders organisations filter', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Organisations Filter/i);
    expect(linkElement).toBeInTheDocument();
});
