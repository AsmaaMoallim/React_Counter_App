import React, { Component } from 'react';
import {Badge} from 'react-bootstrap';

function NavBar(props){
   
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1 fs-1">Total Counters 
                          <Badge pill variant="secondary" className='fs-2'>
                            {props.counters}

                        </Badge>
                        </span>
                    </div>
                </nav>

            </div>
        )
    
};


export default NavBar;
