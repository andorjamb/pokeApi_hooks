import { cleanup, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Card from '../components/Card';
import ditto from '../../ditto.png';

afterEach(cleanup);

const image = ditto;

const name = "ditto";

test('Checks correct heading display', () => {
    render(<Router><Card image={image} name={name} /></Router>
    )
    const heading3 = screen.getByRole('h3');
    expect(heading3.textContent).toBe("Ditto");
});


