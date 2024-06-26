import React from 'react';
import PastArt from '../modules/PastArt';

function PastWork(props) {
    return (
        <section className='pwork'>
            <div className='past-cont'>
                <div className='art-box'>
                    <aside className='list-area'>
                        <h1>과거작품리스트</h1>
                    </aside>
                    <PastArt/>
                    <div className='underline-area'></div>
                </div>
                <div className='right-poster'></div>
            </div>
        </section>
    );
}

export default PastWork;