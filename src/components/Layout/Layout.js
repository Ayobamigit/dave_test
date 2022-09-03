import React, { Component } from 'react'
import Sidebar from './Sidebar'

export default class Layout extends Component {
    render() {
        return (
            <div id='wrapper'>
                <div id='sidebar'>
                    <Sidebar/>
                </div>
    
                <div id='main'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}