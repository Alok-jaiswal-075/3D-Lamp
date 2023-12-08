import { Canvas } from '@react-three/fiber';
import { Suspense,useState } from 'react';
import './App.css'
import Lamp from './component/Lamp';
import Button from './component/Button';
import Brightness from './component/Brightness';
import Color from './component/Color';

function App() {
  const [lampOn, setLampOn] = useState(true);
  const [level,setLevel] = useState(30);
  const [color,setColor] = useState("#ffff00")

  const toggleLamp = () => {
    setLampOn((prevLampState) => !prevLampState);
  };

  const handleLevel = (e) => {
    setLevel(e.target.value)
  }

  const handleColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className="">
      <Button toggleLamp={toggleLamp} lampOn={lampOn}/>
      <Brightness handleLevel={handleLevel} level={level}/>
      <Color handleColor={handleColor} color = {color}/>
      <Canvas id="three-canvas-container" shadows>
        <Suspense fallback={<></>}>
          <Lamp isLampOn={lampOn} level={level} color={color}/>       
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App