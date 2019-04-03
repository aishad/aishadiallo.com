import React, { Component } from 'react';
import Link from 'next/link'
import './Navbar.scss'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.props = props
    }

    render() {
        return (
            <nav>
                <div className="example">
                    <Link href="/about">
                    <a title ="About me">About me</a>
                    </Link>
                    <Link href="/">
                    <a title ="My work">My work</a>
                    </Link>
                    <mark className="badge">
                    HELLO
                    </mark>
                </div>
            </nav>

        )
    }
}

export default Navbar;