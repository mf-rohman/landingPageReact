import React from 'react';
import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <nav>
            <ul>
                <li> <Link className="a-ref" to ="/" >Home</Link> </li>
                <li> <Link className="a-ref" to ="/about" >About</Link> </li>
                <li> <Link className="a-ref" to ="/project" >Project</Link> </li>
                <li> <Link className="a-ref" to ="/price" >Product</Link> </li>
            </ul>
        </nav>
    );
}
export default Navbar;