/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './links.css';

const Links = () => {
    return (
      <><div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Links to my Work</h1>
            </div>
        </div>
        <div className='artlinks'>
        <a href="https://www.artstation.com/crosbieybarra" target="_blank"> ArtStation</a> |
        <a href="https://www.behance.net/crosbieybarra" target="_blank"> Behance</a> |
        <a href="https://www.instagram.com/_crosbie_x/" target="_blank"> Instagram</a> |
        <a href="https://www.youtube.com/channel/UCXdI-sRdYBFqHidte--CS-w/videos" target="_blank"> Youtube</a> |
        <a href="https://crosbie.vercel.app/" target="_blank"> Web Design Portfolio</a> |
            
        </div></>
    );
  };
  

export default Links
