
import NET from 'vanta/dist/vanta.net.min.js'
import * as THREE from 'three'
import React, {useState, useEffect, useRef} from 'react'
const VantaBackground = props =>{
    const [vantaEffect, setVantaEffect] = useState(0)
    const vantaRef = useRef(null)
    useEffect(()=>{
        if(!vantaEffect){
            let vanta = NET(
                {   
                    el:vantaRef.current,
                    THREE:THREE,
                    mouseControls:true,
                    touchControls:true,
                    gyroControls:false,
                    scale:1.00,
                    scaleMobile:1.00,
                    color: 0x000031,
                    backgroundColor: 0xffffff,
                    showLines:true,
                    points: 10,
                    maxDistance:20,
                    spacing:15
                }
            )
            setVantaEffect(vanta)
            return ()=>{
                if(vantaEffect) vantaEffect.destroy()
            }
        } 
    },[vantaEffect])
    return <div ref ={vantaRef} className='position-fixed' style={{zIndex:'-3000', height:'100vh',width:'100vw'}}></div>
}
export default VantaBackground
