import { fireEvent, render, screen } from '@testing-library/react';
import Home from './page'
import * as formActions from './action';

jest.mock('./action.ts', () => ({
    __esModule: true,
    action: jest.fn(),
}));


describe('Home', () => {
    test('WORKS - Tests that do not submit form work', () => {
        render(<Home />);
        const buttonEl = screen.getByRole('button');
        expect(buttonEl).toBeTruthy();
    });

    test('DOES NOT WORK - Tests that check server action is called dont work', () => {
        const { container } = render(<Home />);

        const spy = jest.spyOn(formActions, 'action');

        const buttonEl = screen.getByRole('button')!;
        fireEvent.click(buttonEl);

        const formEl = container.querySelector('form');
        formEl.dispatchEvent(new Event('submit'));
        expect(spy).toHaveBeenCalled();
    });

});
