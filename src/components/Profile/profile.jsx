import './profile.css'
// import { ShowCards } from '../Cards/Cards'
export function Profileview () {
  return (
    <section className='profile-container'>
      <div className='panel lateral'>
        <img className='profile-img' src='react.svg' />
        <h3>Yader Sáenz</h3>
        <p>cargo</p>
        <nav>
          <a>Task</a>
          <a>Calendar</a>
        </nav>
      </div>
      <div className='panel centro'>
        <h2>Task</h2>
        <div className='Task-container'>
          <h2>Estoy creando la visualizacion de las tags</h2>
        </div>
      </div>
      <div className='panel lateral'>
        <h2>Derecho</h2>
      </div>
    </section>
  )
}
