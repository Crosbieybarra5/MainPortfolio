import "./about.css";

const About = () => {
    return (
    <div className="about">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                    src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="a-img"
                />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services and
                online stores.
            </p>
            <p className="a-desc">
            Experienced Digital Artist and Animator, with passion for gaming. Solid 2d art skills, in painting and design. Mostly working with Photoshop and Spine and other illustrative software. Available for work, whether it be web design in simple html or be it graphic design, creating art has been a passion for years.

            </p>
        </div>
    </div>
    );
}

export default About