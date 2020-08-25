import React, { useEffect, useState } from "react"

const Intro = ({data}) => {
    const intro = data;
    const [slideEffect, setSlide] = useState(true);

    useEffect(() => {
        runSlide();
    },[]);
    
    const runSlide = () => {
        let timer1 = setTimeout(() => setSlide(false), 400);
        return () => {
            clearTimeout(timer1);
        }
    };

    return <header className={`intro section-centre section-padding ${slideEffect && 'intro-slide-in'}`}>
            <h4 className="subTitle">{intro.subTitle}</h4>
            <h1 className="title">{intro.title}</h1>
            <p className="description">{intro.description}</p>
    </header>
}

export default Intro