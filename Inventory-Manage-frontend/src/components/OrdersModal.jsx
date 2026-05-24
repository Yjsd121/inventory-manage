import { useEffect, useState } from "react"
import { useAppContext } from "../context/TrialContext"
import { orderFilters } from '../static/Ordersfilters.js'
import AddBoxIcon from '@mui/icons-material/AddBox';

export function OModal() {
  const { showmodal, setshowmodal } = useAppContext()
  const [Inv, setinv] = useState([])


  const [selectedProductId, setSelectedProductId] = useState('')
  const [quantity, setQuantity] = useState('')
  const [orderList, setOrderList] = useState([])

  const handleAddProduct = () => {
    const product = Inv.find(item => String(item.Id) === selectedProductId)

    if (!product || !quantity) return

    setOrderList(prev => [
      ...prev,
      {
        id: product.Id,
        Category: product.Category,
        name: product.Name,
        price: product.Price * Number(quantity),
        quantity: Number(quantity)
      }
    ])

    setQuantity('')
  }

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
    <>

      <div className='modal-head'>
        <h2>Add New</h2>
        <p>Fill the information to create a new product</p>

        <h3>Name</h3>
        <input
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>


      <div id="orders" className="modal-info">
        <select
          className="custom-select"
          value={selectedProductId}
          onChange={(e) => setSelectedProductId(e.target.value)}
        >
          <option value="">Select product</option>

          {Inv.map(item => (
            <option key={item.Id} value={item.Id}>
              {item.Name} C${item.Price}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min={0}

        />

        <button
          type="button"
          className="btn-sin-efectos"
          onClick={handleAddProduct}
        >
          <AddBoxIcon />
        </button>
      </div>
      <div className="order-list">
        {orderList.map((item, index) => (
          <div key={`${item.id}-${index}`} className="orderlist">
            <p>
              {item.name}
            </p>
            <p>
              type {item.Category}
            </p>
            <p>
              Quantity: {item.quantity}
            </p>
            <p>
              Price: C${item.price}
            </p>
          </div>
        ))}
      </div>


      <div id="orders" className="modal-info">

        <button onClick={() => setshowmodal(false)}>Cancel</button>
        <button onClick={handleSubmit}>Add</button>
      </div>

    </>
  )
}