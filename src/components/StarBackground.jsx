import { useEffect, useState } from "react"

export const StarBackground = () =>{
    const [stars,updatestars] = useState([]);
    const[metors,updatemetor] = useState([])
    useEffect(()=>{
        generateStarts();
        generateMetor();
        const resize = () =>{
                generateStarts();
            };
        window.addEventListener('resize',resize)
        return () => window.removeEventListener('resize',resize)
    }, [])
     

    const generateStarts = () =>{
        const numberofstart = Math.floor(
            (window.innerWidth * window.innerHeight)/10000
        )
        const newstars = [];
        for (let i=0;i < numberofstart;i++){
            newstars.push({
                id:i,
                size:Math.random() * 3 + 1 ,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 +  2,
            });
        }
        updatestars(newstars);
        

    };
    const generateMetor= () =>{
        const numberofmetor = 4
        const newmetor = [];
        for (let i=0;i < numberofmetor;i++){
            newmetor.push({
                id:i,
                size:Math.random() * 2 + 1 ,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 3 +  3,
            });
        }
        updatemetor(newmetor);

    };
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width:star.size + "px",
                height:star.size + "px",
                left:star.x + "%",
                top:star.y + "%",
                opacity:star.opacity,
                animationDuration:star.animationDuration + "s",
            }}/>
        ))}
        {metors.map((metor) => (
            <div key={metor.id} className="meteor animate-meteor" style={{
                width:metor.size*50 + "px",
                height:metor.size*2 + "px",
                left:metor.x + "%",
                top:metor.y + "%",
                animationDelay:metor.delay + 's',
                animationDuration:metor.animationDuration + "s",
            }}/>
        ))}
    </div>;
}