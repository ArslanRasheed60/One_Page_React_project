import React, { Component } from 'react';
import OfferCard from './offerCard';
import PriceCard from './priceCard';

const MainComponent = () => {
    return ( <div className='bg-primary min-h-full p-4 text-center'>
        <OfferCard/>
        <PriceCard/>
        <button className='tracking-tighter font-medium rounded-full w-11/12 border-neutral-600 border-2 text-neutral-600 m-5'>Continue with Limited Plan</button>
    </div> );
}
 
export default MainComponent;