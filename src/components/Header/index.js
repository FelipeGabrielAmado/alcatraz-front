import React, { Component } from 'react';
import './responsive.css'
import './styles.css'

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import api from '../../services/api'
import { Link } from 'react-router-dom'


export default class Header extends Component {

    state = {
        categories: [],
        isOpen: false

    };

    async componentDidMount() {
        const response = await api.get(`/categories`);
        console.log(response)
        this.setState({ categories: response.data });
    }

    openMenu(){
        console.log('chegou');
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { categories } = this.state;
        const itemsMenu = categories.filter(category => category.menu === true);


        return (
            <div className="header">
                <a href="/">
                    <header id="main-header">
                        <img src="/images/logo.png" alt="Logo Alcatraz" />
                    </header>
                </a>
                <header id="sub-header">
                    <ul>

                        {itemsMenu.map((category) => (



                            <li key={category.id} className={(!this.state.isOpen) ? "menu-item" : ""}>  <Link to={`/categories/${category.id}`} > {category.name}  </Link></li>


                        ))}
                        <li key={'see-more'} className='more-item'> <a href='#' onClick={() => this.openMenu()}> See categories <FontAwesomeIcon icon={faBars} /> </a> </li>
                    </ul>
                </header>
            </div>
        );
    }
}