const React = require('react');
const ReactDOM = require('react-dom');
require('index.css');
//component has
//state
//lifecycle methods
//UI (ALWAYS HAS UI)

class App extends React.Component {
  render() {
    return (
      <div>
        HEYYYYY
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

