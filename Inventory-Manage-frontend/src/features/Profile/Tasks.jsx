import task from '../../mocks/Task.json'

export function Tasks() {
  return (
    <div className='container'>
      <h2>Task</h2>
      <div className='Task-container'>
        <div className='showOrders'>
          {
            task.tasks.map(index => (
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
  )
}