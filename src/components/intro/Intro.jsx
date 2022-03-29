import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className = 'intro'>
            <div className="i-left">
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, I'm</h2>
                    <div className='i-name bouncing-text'>
                    <div class="c">C</div>
                    <div class="r">R</div>
                    <div class="o">O</div>
                    <div class="s">S</div>
                    <div class="b">B</div>
                    <div class="i">I</div>
                    <div class="e">E</div>
                    <div class="y">Y</div>
                    <div class="b">B</div>
                    <div class="a">A</div>
                    <div class="rr">R</div>
                    <div class="rrr">R</div>
                    <div class="aa">A</div>
                    </div>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front End Developer</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">     Artist   </div>
                            <div className='i-title-item'> Graphic Designer </div>
                        </div>
                        </div>
                    
                </div>
            </div>
            <div className="i-right"></div>
            <div className='i-bg'></div>
        </div>
  )
}

export default Intro
