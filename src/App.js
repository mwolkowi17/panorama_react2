
import './App.css';
import React, { useState, Suspense, useEffect } from 'react'
import { Canvas, } from '@react-three/fiber'
import { OrbitControls, Html, useProgress, Loader } from '@react-three/drei';
import { Panorama2 } from './Panorama2';
import { PanoramaStart } from './PanoramaStart';
import { Panorama3 } from './Panorama3';
import { Display } from './Display';
import { Data } from './InfoData';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'



function App() {

  // function Loader() {
  //   //const { progress } = useProgress()
  //   //return <Html center >{progress} % loaded</Html>
  //   console.log('loader')
  //   return <Html center style={{ color: 'black' }}>loading...</Html>
  // }

  const [ifPanaroma2, SetPanoram2] = useState(false);
  const [ifPanorama3, SetPanorama3] = useState(false);
  const [ifPanoramaStart, SetPanoramaStart] = useState(true);
  const [isDisplay, setIsDisplay] = useState(false);
  const [nrInfoToDisplay, setNrInfoToDisplay] = useState(0);

  function closeDetails() {
    setIsDisplay(false)
  }

  const texture1 = useLoader(TextureLoader, './index.png')
  const texture2 = useLoader(TextureLoader, './kawiarnia3.png')
  const texture3 = useLoader(TextureLoader, './kawiarnia4.png')



  return (
    <>
      
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}>
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          
          {/* <StrzalkaDiferent position={[55, -70, -140]} scale={[10, 0.7, 10]} onClick={(event) => { SetAdress(adress[1]) }} /> */}
          {/* <Panorama position={[0, 0, 0]} filename={filenameAdres}/> */}
          {ifPanoramaStart === true &&
             <Suspense fallback={null}>
              <PanoramaStart texture={texture1} action={(event) => { SetPanoramaStart(false); SetPanoram2(true) }}
                actioninfo1={(event => {
                  setIsDisplay(true);
                  setNrInfoToDisplay(1)
                })} />
            </Suspense>
          }
         
          {ifPanaroma2 === true &&
            <Panorama2 texture={texture2} action1={(event) => { SetPanoramaStart(true); SetPanoram2(false) }}
              action2={(event) => { SetPanoram2(false); SetPanorama3(true) }} />
          }

          {ifPanorama3 === true &&
            <Panorama3 texture={texture3} action1={(event) => { SetPanorama3(false); SetPanoram2(true) }} />
          }



        </Canvas>
      <Loader />
      <Display isVisible={isDisplay ? 'visible' : 'hidden'}
        closeDisplay={closeDetails}
        DataToDisplay={Data[nrInfoToDisplay]}
      />
    </>
  );
}

export default App;
