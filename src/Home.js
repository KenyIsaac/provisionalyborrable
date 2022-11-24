import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showTitle: false };
    }

    render() {
        return (
          <div>
            <button onClick={() => this.setState({ showTitle: true })}>Click</button>
            {this.state.showTitle && (
              <h1>Hola Mundo</h1>
            )}
          </div>
        );
      }
    }



export default Home 