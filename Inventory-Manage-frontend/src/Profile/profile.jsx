import './profile.css'
import task from '../mocks/Task.json'
// import { DemoApp } from './calendar'

export function Profileview () {
  const tasks = task.tasks

  return (
    <section className='profile-container'>
      <section className='panel'>
        <img className='profile-img' src='react.svg' />
        <h3>Yader Sáenz</h3>
        <p>cargo</p>
        <nav>
          <a>Task</a>
          <a>Calendar</a>
        </nav>
      </section>
      <section className='panel'>
        <div className='padding'>
          <div className=' calendar container '>

          </div>
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

      </section>
    </section>
  )
}
