
import './app.scss'
import fotoPerfil from './img/perfil-1.jpg'
import fotoNieve from './img/nieve-1.jpg'
import pueblo from './img/poblado-1.jpg'
//import pueblo2 from './img/pueblo-2.jpg'
import barranco from './img/acantilado-1.jpg'
import barranco2 from './img/acantilados-2.jpg'
import lago from './img/lago-1.jpg'
import bici from './img/bici-2.jpg'


function App() {
  return (
<>
<header className="user-info">
  <img className="user-profile"  alt='perfil' src={fotoPerfil}/>
  <h2 className="user-name"> Gabriel Delgado</h2>
  <p className="location">Moria,Spain</p>
  <div className='contadores' >
    <div>
      <h3>100</h3>
      <p>Posts</p>
    </div>
    <div>
      <h3>1,203</h3>
      <p>Follower</p>
    </div>
    <div>
      <h3>240</h3>
      <p>Following</p>
    </div>
  </div>

</header>

<main className='contenedor-pal' >

  <div className='primera-linea'> 
    <img className='img-1' src={fotoNieve} alt='nieve'/>
    <img className='img-2' src={pueblo} alt='ruinas'/>
    
  </div>

  <div className='segunda-linea'> 
    <div className='contenedor-bloque'>
      <img className='img-3' src={bici} alt='bici'/>
      <div className='tercera-linea'>
        <img className='img-4' src={barranco2} alt='acantilado'/>
        <img className='img-4' src={lago} alt='lago'/>
      </div>
    </div>
      <img className='img-5' src={barranco} alt='barranco'/> 
  </div>

</main>
<footer className='my-footer'>
<p>Created by Gabriel Delgado</p>
</footer>
</>
)}

export default App;
