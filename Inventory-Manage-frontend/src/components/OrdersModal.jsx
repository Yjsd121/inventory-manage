import { useEffect, useState } from "react"
import { useAppContext } from "../context/TrialContext"
import Ordersfilters from '../mocks/Ordersfilters.json'

export function OModal() {
  const { showmodal, setshowmodal } = useAppContext()
  const [Inv, setinv] = useState([])
  const filters = Ordersfilters.orderFilters

  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: ''
  })

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log("DATA FINAL:", formData)

  }

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Server error")
        }

        return res.json()
      })
      .then(data => {
        const value = Object.values(data)[0]
        console.log(value)
        setinv(value)
      })
      .catch(error => console.log("AQUI HAY UN GRAN ERROR", error))
  }, [showmodal])


  return (
    <section className='overlay'>
      <div className='modal-container'>

        <div className='modal-head'>
          <h2>Add New</h2>
          <p>Fill the information to create a new product</p>

          <h3>Name</h3>
          <input
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
        </div>


        <div className="modal-info">
          <select className="custom-select">
            {
              Inv.map(item => (
                <option key={item.Id}>{item.Name} C${item.Price}</option>

              ))
            }
          </select>
        </div>

        <div className='modal-info'>
          <h3>Quantity</h3>
          <input
            value={formData.quantity}
            onChange={(e) => handleChange('quantity', e.target.value)}
          />

          <h3>Price</h3>
          <input
            value={formData.price}
            onChange={(e) => handleChange('price', e.target.value)}
          />

          <h3>Status: </h3>
          {
            Object.entries(filters).map(([filtername, options]) => (
              <div key={filtername} className='filter'>


                <select
                  className="custom-select"
                  value={formData[filtername] || ''}
                  onChange={(e) => handleChange(filtername, e.target.value)}
                >

                  {
                    options.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))
                  }
                </select>

              </div>
            ))
          }
        </div>

        <div className='modal-info'>
          <button onClick={() => setshowmodal(false)}>Cancel</button>
          <button onClick={handleSubmit}>Add</button>
        </div>

      </div>
    </section>
  )
}