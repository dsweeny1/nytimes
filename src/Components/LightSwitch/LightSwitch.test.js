import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import LightSwtich from './LightSwitch'
import App from '../App/App'
import { MemoryRouter } from 'react-router-dom'
import ThemeContext, { ThemeProvider } from '../../Contexts/ThemeContext'

describe('LightSwitch component', () => {
    test('that the theme starts out with a white background', () => {
        // render(<LightSwtich />)
        render(
            <ThemeProvider >
                <App />
            </ThemeProvider>,
            {wrapper: MemoryRouter}
        )
        const lightModeSwitch = screen.getByTestId('lightswitch-image')
        const appBackground = screen.getByTestId('App App-light')
        expect(lightModeSwitch).toBeInTheDocument()
        expect(appBackground).toBeInTheDocument()
    })
    test('that the theme toggles', () => {
        render(
            <ThemeProvider >
                <App />
            </ThemeProvider>,
            {wrapper: MemoryRouter}
        )
        const lightModeSwitch = screen.getByTestId('lightswitch-image')
        fireEvent.click(lightModeSwitch)
        const appBackgroundDark = screen.getByTestId('App App-dark')
        expect(appBackgroundDark).toBeInTheDocument()
        fireEvent.click(lightModeSwitch)
        const appBackgroundLight = screen.getByTestId('App App-light')
        expect(appBackgroundLight).toBeInTheDocument()
    })
})