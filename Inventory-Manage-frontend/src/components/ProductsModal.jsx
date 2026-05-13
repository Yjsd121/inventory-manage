import { useState } from "react"
import { useAppContext } from "../context/TrialContext"
import { productFilters } from '../static/ProductsFilters.js'

export function PModal() {
  const { setshowmodal } = useAppContext()
  

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

        <div id="products" className='modal-info'>
          {
            Object.entries(productFilters).map(([filtername, options]) => (
              <div key={filtername} >
                <h3>{filtername} </h3>

                <select
                  className="custom-select"
                  style={{ "width": "200px" }}
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

          <div >
            <h3>Quantity</h3>
            <input
              style={{ "width": "200px" }}
              value={formData.quantity}
              onChange={(e) => handleChange('quantity', e.target.value)}
            />
          </div>

          <div>
            <h3>Price</h3>
            <input
              style={{ "width": "200px" }}
              value={formData.price}
              onChange={(e) => handleChange('price', e.target.value)}
            />
          </div>

          <button onClick={() => setshowmodal(false)}>Cancel</button>
          <button onClick={handleSubmit}>Add</button>
        </div>

      </div>
    </section>
  )
}