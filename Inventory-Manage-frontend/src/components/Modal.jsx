export function Umodal({ children }) {
  return (
    <section className='overlay'>
      <div className='modal-container'>
        {children}
      </div>
    </section>
  )
}