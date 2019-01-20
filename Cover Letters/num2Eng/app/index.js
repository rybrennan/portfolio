const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
import { numToEng, hundred, tens, numObj } from './utils';
//component has
//state
//lifecycle methods
//UI (ALWAYS HAS UI)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      items: []
    };
    this.onChange = this.onChange.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  onChange(e) {
    this.setState({
      amount: e.target.value
    });
  }
  addItem(e) {
    e.preventDefault();
    this.setState({
      amount: '',
      items: [...this.state.items, this.state.amount]
    });
  }
  render() {
    return (
    <div>
      <form onSubmit={this.addItem}>
        <input value={this.state.amount} onChange={this.onChange}></input>
        <button>SUBMIT</button>
      </form>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
