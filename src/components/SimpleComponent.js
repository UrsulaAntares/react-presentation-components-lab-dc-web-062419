// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {

    state = {
        mood: 'happy'
    }

    render() {
        return <div onClick={()=>{this.setState({mood: 'sad'})}}>{this.state.mood}</div>
    }
}

export default SimpleComponent