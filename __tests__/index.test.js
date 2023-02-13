// __tests__/index.test.js

import { render } from '@testing-library/react';
import IndexPage from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
    it('renders a heading', () => {
        render(<IndexPage />)
    })
});