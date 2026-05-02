import { useState } from "react"
import { useAppContext } from "../context/TrialContext"
import productsfilters from '../mocks/ProductsFilters.json'

export function PModal() {
  const { setshowmodal } = useAppContext()
  const filters = productsfilters.productFilters

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

    //fetch al backend 

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

        <div className='modal-info'>
          {
            Object.entries(filters).map(([filtername, options]) => (
              <div key={filtername} className='filter'>
                <label>{filtername}: </label>

                <select
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
        </div>

        <div className='modal-info'>
          <button onClick={() => setshowmodal(false)}>Cancel</button>
          <button onClick={handleSubmit}>Add</button>
        </div>

      </div>
    </section>
  )
}