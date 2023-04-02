import { cleanup, render, screen } from '@testing-library/react';
import Card from '../components/Card';
import ditto from '../../ditto.png';

afterEach(cleanup);

const image = ditto;

const name = "ditto";

test('Checks correct heading display', () => {
    render(
        <Card image={image} name={name} />)
    const heading3 = screen.getByRole('h3');
    expect(heading3.textContent).toBe("Ditto");
});


