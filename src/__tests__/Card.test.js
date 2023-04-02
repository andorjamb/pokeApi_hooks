import { cleanup, render, screen } from '@testing-library/react';
import Card from '../components/Card';

afterEach(cleanup);

const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png";

const name = "ditto";

test('Checks correct heading display', () => {
    render(
        <Card image={image} name={name} />)
    const heading3 = screen.getByRole('h3');
    expect(heading3.textContent).toBe("Ditto");
});


