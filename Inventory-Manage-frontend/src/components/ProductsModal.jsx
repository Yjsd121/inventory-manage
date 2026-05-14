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

          <select
            className="custom-select"
            style={{
              "width": "100%",
              "height": "42px"
            }}

          >
            {
              productFilters.categories.map(item => (
                <option key={item} value={item}>{item}</option>
              ))
            }

          </select>


          <div >
            <h3>Quantity</h3>
            <input
              type="number"
              value={formData.quantity}
              onChange={(e) => handleChange('quantity', e.target.value)}
              min={0}
              placeholder="0"
            />
          </div>

          <div>
            <h3>Price</h3>
            <input
              type="number"
              placeholder="0.00"
              min={0}
              value={formData.price}
              onChange={(e) => handleChange('price', e.target.value)}
            />
          </div>


        </div>
        <div id="products" className="modal-info">
          <button onClick={() => setshowmodal(false)}>Cancel</button>
          <button onClick={handleSubmit}>Add</button>
        </div>

      </div>


    </section >
  )
}