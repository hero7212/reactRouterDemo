import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>{this.state.id}</div> );
    }
    componentDidMount(){
        console.log(this.props)
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        })
    }
}
 
export default List;