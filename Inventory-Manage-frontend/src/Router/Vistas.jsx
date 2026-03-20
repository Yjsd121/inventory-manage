import { ShowOrders } from '../orders/Orders'
import { Profileview } from '../Profile/profile'
import { SearchBar } from '../components/SearchBar/searchbar'
import { ShowCards } from '../Products/Cards'
import { Dashboard } from '../Dashboard/Dashboard'
import { useAppContext } from '../context/TrialContext'

import cards from '../mocks/ProductsFilters.json'
import filterss from '../mocks/Ordersfilters.json'
import userfil from '../mocks/usersfilters.json'
export function Vistas({ valor }) {
  const { selectedfilters, SelectedData } = useAppContext();
  if (valor === "Dashboard") {
    return (
      <div>
        <Dashboard />
      </div>)
  } else if (valor === "Products") {
    return (
      <div>
        <SearchBar
          endpoint={valor}
          filters={cards.productFilters}
        />
        <ShowCards />
      </div>
    )
  } else if (valor === "Orders") {
    return (
      <div>
        <SearchBar
          endpoint={valor}
          filters={filterss.orderFilters}
        />
        <ShowOrders />
      </div>
    )
  } else if (valor === "Users") {
    return (
      <SearchBar
        endpoint={valor}
        filters={userfil.UserFilters}
      />
    )
  } else if (valor === "Profile") {
    return (
      <Profileview />
    )
  }
}
