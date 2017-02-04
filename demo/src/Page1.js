import React from 'react'
import sap from '../../src'
import {Router, Route, hashHistory} from 'react-router'

class Page1 extends React.Component {
  render() {
    return (
      <sap.m.Page title='Hello World 1'>
        <sap.m.Button
          onPress={() => this.context.router.push('/page2')}
          type={sap.m.ButtonType.Emphasized}
        >
          To page 2
        </sap.m.Button>
      </sap.m.Page>
    )
  }
}

Page1.contextTypes = {
  router: React.PropTypes.object
}

export default Page1