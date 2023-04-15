import { Panorama } from './Panorama_formatka';
import { StrzalkaDiferent } from './StrzalkaDiferent';

export const Panorama3 = (props) => {

    //const adress = './kawiarnia4.png'

    return(
        <group>
            <Panorama position={[0, 0, 0]} texture={props.texture}/>
            <StrzalkaDiferent position={[60,-110,150]} scale={[10,0.7,10]} rotation={[0,-Math.PI/4.3,0]} onClick={props.action1} />
            
        </group>
    )
}