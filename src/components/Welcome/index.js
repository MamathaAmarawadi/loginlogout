// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {isLogin: 'Subscribe'}

  onButton = () => {
    this.setState(preState => {
      console.log('fjkjfd')
      if (preState.isLogin === 'Subscribe') {
        return {isLogin: 'Subscribed'}
      }
      return {isLogin: 'Subscribe'}
    })
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="container">
        <div className="frame">
          <h1 className="heading">Welcome</h1>

          <p className="para">Thank you! Happy Learning</p>
          <div>
            <button onClick={this.onButton} className="button">
              {isLogin}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
