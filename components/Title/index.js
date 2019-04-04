import React, { Component } from 'react';
// import './Title.scss'
import Link from 'next/link';


class Title extends Component {

    render() {
        return (
            <div className="title">
            <Link href="/">
                aisha diallo
            </Link>
            </div>
        )
    }
}

export default Title;