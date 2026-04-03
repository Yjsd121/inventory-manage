import { useAppContext } from "../context/TrialContext"

export function Modal({view}) {
  const { setshowmodal } = useAppContext()
  return (
    <section className='overlay'>
      <div className='modal-container'>

        <div className='modal-head'>
          <h2>Add New {view}</h2>
          <p>Fill the information to create a new product</p>
          <h3>Name</h3>
          <input />
        </div>
        <div className='modal-info'>
          <h3>category</h3>
          <select />
          <h3>Status</h3>
          <select />
        </div>
        <div className='modal-info'>
          <h3>Quantity</h3>
          <input />
          <h3>Price</h3>
          <input />
        </div>
        <div className='modal-info'>
          <button onClick={() => { setshowmodal(false) }}>Cancel</button>
          <button>Add</button>

        </div>
      </div>
    </section>
  )
}