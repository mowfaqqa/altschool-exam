import React, { Component } from 'react'
import { Head } from '../styles/styles';

export class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null,
    }
  }


  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) return <Head small>Error!!! You exceeded the number of counts possible.</Head>

    return this.props.children
  }
}