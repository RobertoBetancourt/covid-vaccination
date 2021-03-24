import { render, screen } from '@testing-library/react'
import ReactDOM, { unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
// import { describe, expect, test } from '@jest/globals'
import LandingPage from './components/landing-page/landing-page.component'
import LandingPageForm from './components/landing-page/landing-page-form.component'
import App from './App'

let container = null
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('Landing page', () => {
  it('Renders title correctly', () => {
    act(() => {
      render(<LandingPage />, container)
    })
    expect(screen.getByText('Acerca del proyecto')).toBeInTheDocument()
  })

  // it('Form throwing errors', () => {
  //   act(() => {
  //     const landingPageForm = render(<LandingPageForm />, container)
  //     const nameInput = landingPageForm.container.querySelector('#name')
  //     console.log(nameInput)
  //   })
  // })
})
