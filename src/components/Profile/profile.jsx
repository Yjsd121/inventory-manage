import './profile.css'
import task from '../../mocks/Task.json'

export function Profileview () {
  const tasks = task.tasks
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
        <div className='container'>
          <h2>Task</h2>
          <div className='Task-container'>
            <div className='showOrders'>
              {
                tasks.map(index => (
                  <div key={index.id} className='order-card'>
                    <p>{index.id}</p>
                    <p>{index.title}</p>
                    <p>{index.status}</p>
                  </div>
                ))
              }
            </div>
          </div>
          <button>
            Create
          </button>
        </div>
      </div>
      <div className='panel lateral'>
        <h2>Derecho</h2>
      </div>
    </section>
  )
}
