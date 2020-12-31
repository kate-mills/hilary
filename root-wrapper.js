import React from 'react'
import 'fontsource-raleway/400.css'
import './src/components/layout.css'

import { ProductsProvider } from './src/context/products_context'
import { FilterProvider } from './src/context/filter_context'
import { CartProvider } from './src/context/cart_context'
import { UserProvider } from './src/context/user_context'
import { silentAuth } from "./src/utils/auth"


class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <>
    <SessionCheck>
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              {element}
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </SessionCheck>
    </>
  )
}
