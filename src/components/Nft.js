import React from 'react';
import { contractAddress, tokenId } from '../data/contractData';
import loadingImage from '../assets/images/image_loading.png';

export default function Nft({ metadata }) {

    if (!metadata) {
        return <p>Loading...</p>;
    }

    const osUrl = `https://opensea.io/assets/ethereum/${contractAddress}/${tokenId}`;

    return (
        <div className='flex md:justify-end sm:justify-center text-white'>
            <div>
                {metadata.image ? (
                    <img src={metadata.image} className='md:pl-6 sm:pl-0' alt='NFT visual' />
                ) : (
                    <img src={loadingImage} className='md:pl-6 sm:pl-0' alt='NFT loading visual' />
                )}
                <p className='text-center pt-6 text-sm font-extralight'>View on <a href={osUrl} className='text-sky-400'>Opensea</a> and <a href={metadata.image} className='text-sky-400'>IPFS</a></p>
                <p className='text-center pt-2 pb-8 text-xs font-extralight text-stone-400'>Note: Updates may take time to appear on other platforms</p>
            </div>
        </div>
    );
}