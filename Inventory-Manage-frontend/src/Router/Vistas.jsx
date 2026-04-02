import { ShowOrders } from '../orders/Orders'
import { Profileview } from '../Profile/profile'
import { ShowCards } from '../Products/Cards'
import { Dashboard } from '../Dashboard/Dashboard'
import { MiniDashboard } from '../components/CHART/MiniDashboards'

import { SearchBar } from '../components/SearchBar/searchbar.jsx'
import cards from '../mocks/ProductsFilters.json'

import userfil from '../mocks/usersfilters.json'
export function Vistas({ valor }) {
  if (valor === "dashboard") {
    return (
      <div >
        <MiniDashboard valor={'products'}/>
        <Dashboard endpoint={valor}/>
      </div>)
  } else if (valor === "products") {
    return (
      <div >
        <MiniDashboard valor={valor}/>
        <SearchBar
          endpoint={valor}
          filters={cards.productFilters}
        />
        <ShowCards endpoint={valor} />
      </div>
    )
  } else if (valor === "orders") {
    return (
      <div >
        <MiniDashboard valor={valor}/>
        <ShowOrders endpoint={valor}/>
      </div>
    )
  } else if (valor === "users") {
    return (
      <SearchBar
        endpoint={valor}
        filters={userfil.UserFilters}
      />
    )
  } else if (valor === "profile") {
    return (
      <Profileview />
    )
  }
}
