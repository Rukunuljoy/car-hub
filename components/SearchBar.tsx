"use client"
import React, { useState } from 'react';
import SearchManufacture from './SearchManufacture';

const SearchBar = () => {
    const [manuFacture,setManuFacture] =useState('')
    const handleSubmit=()=>{

    }
    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <div className='searchbar__item'>
                <SearchManufacture
                manuFacture={manuFacture}
                setManuFacture={setManuFacture}
                />
            </div>
        </form>
    );
};

export default SearchBar;