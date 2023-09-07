import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe('Button', () => {
    test('simple test button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
