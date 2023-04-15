import { Panorama } from './Panorama_formatka';
import { StrzalkaDiferent } from './StrzalkaDiferent';

export const Panorama2 = (props) => {

    //const adress = './kawiarnia3.png'

    return(
        <group>
            <Panorama position={[0, 0, 0]}  texture={props.texture} />
            <StrzalkaDiferent position={[130,-70,-190]} scale={[10,0.7,10]} onClick={props.action1} />
            <StrzalkaDiferent position={[-40,-70, 210]} scale={[10,0.7,10]} rotation={[0,Math.PI,0]} onClick={props.action2} />
        </group>
    )
}