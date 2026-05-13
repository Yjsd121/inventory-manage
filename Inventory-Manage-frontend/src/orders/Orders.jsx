import './Orders.css'
import { useAppContext } from '../context/TrialContext'
import { SearchBar } from '../components/SearchBar/searchbar'
import orderFilterss from '../mocks/Ordersfilters.json'

import ordersfiltros from '../mocks/Ordersfilters.json'
import { MiniDashboard } from '../components/CHART/MiniDashboards'
import { BarNav } from '../components/SideBar/NavegationBar'
import { OModal } from '../components/OrdersModal'

export function Orderlist({ orderss, selectedfilters }) {
  return (
    
    orderss.filter(order => {
      return ((order.Status === selectedfilters.status || selectedfilters.status === 'all') &&
        (order.Price === selectedfilters.Price || selectedfilters.Price === 'all'))
    }).map(order => (
      <div key={order.Id} className="order-card">
        <span>{order.Id}</span>
        <span>{order.Product}</span>
        <span>{order.Quantity}</span>
        <span>${order.Price}</span>

        <span className={`status ${order.Status.toLowerCase()}`}>
          {order.Status}
        </span>

        <button>View</button>
      </div>
    ))
  )
}
function Orders({ orderss, selectedfilters }) {
  const hasorders = orderss?.length > 0
  return (
    hasorders
      ? <div>
        <div className="orders-header">
          <span>Order #</span>
          <span>Product</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Status</span>
          <span>---------------------------------</span>
        </div>
        <Orderlist orderss={orderss} selectedfilters={selectedfilters} />
      </div>
      : (
        <h2>No hay órdenes</h2>
      )
  )
}

export function ShowOrders({ endpoint }) {
  const { showmodal, selectedfilters, SelectedData } = useAppContext();
  return (
    <main>
      <BarNav />
      <div className="Right">
        <div className="content">
          <MiniDashboard valor='orders' />
          <SearchBar endpoint={'orders'} filters={orderFilterss.orderFilters} />
          <section className='orders'>
            <div className='ShowElements Orders'>
              <Orders orderss={SelectedData} selectedfilters={selectedfilters} />
            </div>
          </section>
        </div>
      </div>
      {
        showmodal && <OModal filter={orderFilterss.orderFilters} />
      }
    </main>
  )
}
