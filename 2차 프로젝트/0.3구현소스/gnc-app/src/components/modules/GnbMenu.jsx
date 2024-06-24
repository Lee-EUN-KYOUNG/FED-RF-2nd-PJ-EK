import React from 'react';

function GnbMenu(props) {
    return (
        <>
        <aside className="GNB-BOX">
            <ul className="GNB-CT">
            <p>CONTENT</p>
            </ul>
            <ul className="GNB-BAR">
                <li>ABOUT</li>
                <li>EXHIBITION</li>
                <li className='on'>NOTICE</li>
                <li>CONTACT</li>
            </ul>
        </aside>
        </>
    );
}

export default GnbMenu;