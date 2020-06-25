import React from 'react'
import {
    Navbar,
} from 'react-bootstrap'

export default class NavigationBar extends React.Component {
    render () {
        return (
            <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Fancy Todo App</Navbar.Brand>
            </Navbar>
        )
    }
}