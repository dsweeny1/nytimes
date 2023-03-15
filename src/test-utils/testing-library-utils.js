import { render } from '@testing-library/react'
import { SavedProvider } from '../Contexts/SavedContext'

const renderWithContext = (ui, options) => render(ui, {wrapper: SavedProvider, ...options})

export * from '@testing-library/react'

export { renderWithContext as render }