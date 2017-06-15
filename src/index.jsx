import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
class App extends React.Component
{
    render(){
        return (
            <div>
                This is a react.
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('content'));