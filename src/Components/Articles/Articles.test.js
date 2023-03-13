import { logRoles, render, screen } from '@testing-library/react';
import Articles from './Articles';
import { MemoryRouter } from 'react-router-dom';

test('Articles component', () => {
    const {articlesContainer} = render(<Articles />, {wrapper: MemoryRouter})
    logRoles(articlesContainer)
})