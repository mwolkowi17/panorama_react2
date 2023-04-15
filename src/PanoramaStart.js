import { InfoButton } from './Info_button';
import { Panorama } from './Panorama_formatka';
import { StrzalkaDiferent } from './StrzalkaDiferent';


export const PanoramaStart = (props) => {

    //const adress = './index.png'

    return(
        <group>
            <Panorama position={[0, 0, 0]} texture={props.texture}/>
            <StrzalkaDiferent position={[-65,-70,-140]} scale={[10,0.7,10]} onClick={props.action} />
            <InfoButton position={[-280,-70,270]} scale={[10,0.7,10]} onClick={props.actioninfo1}  />       
        </group>
    )
}