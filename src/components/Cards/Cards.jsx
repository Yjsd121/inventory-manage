import './Cards.css'

export function Cards ({ Item }) {
  return (
    <ul className='inventario'>
      {
        Item.map(item => (
          <li key={item.id}>
            <div className='Cards'>
              <img src='/react.svg' />
              <div className='Info'>
                <p>Name: {item.name}</p>
                <p>{item.status}</p>
                <p>Cant:{item.quantity}</p>
                <p>${item.unitPrice}</p>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
