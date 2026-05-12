import './profile.css'
import { BarNav } from '../components/SideBar/NavegationBar'
import { Tasks } from './Tasks'


export function Profileview() {

  return (
    <main>
      <BarNav />
      <div className="Right">
        <div className="content">
          <div className='profile-container'>
            <section className='panel profile-card'>
              <img className='profile-img' src='react.svg' />
              <h3>Yader Sáenz</h3>
              <p>cargo</p>

              <nav className="profile-tabs">
                <a>Task</a>
                <a>Calendar</a>
              </nav>
            </section>

            <section className='panel profile-main'>
              <Tasks />
            </section>
          </div>

        </div>
      </div>
    </main>
  )
}
