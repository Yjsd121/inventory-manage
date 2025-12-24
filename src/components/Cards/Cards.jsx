import './Cards.css'

export function Cards ({ Item }) {
  return (
    <div className='Cards'>
      <img src='/react.svg' />
      <div className='Info'>
        <p>Nombre del producto</p>
        <p>Fecha</p>
        <p>Cantidad</p>
        <p>Precio/u</p>
      </div>
    </div>
  )
}
