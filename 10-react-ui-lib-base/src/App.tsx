import './App.css'
import GlowButton from './components/Button/GlowButton/GlowButton'
import IconButton from './components/Button/IconBtn/IconButton'
import RoundedButton from './components/Button/RoundedButton/RoundedButton'
import HoverText from './components/Typography/HoverText/HoverText'
import SlicedText from './components/Typography/Sliced/Sliced'

function App() {

  return (
    <>
      <div className='row'>

        <div className='column'>
          <h2>Buttons Types</h2>
          <GlowButton />
          <RoundedButton />
          <IconButton type="info"/>
        </div>


        <div className='column'>
          <h2>Typography</h2>
          <SlicedText />
          <HoverText />
        </div>
      </div>
    </>
  )
}

export default App
