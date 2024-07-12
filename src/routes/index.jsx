import { BrowserRouter } from "react-router-dom" 

import { CustomerRoutes } from "./customer.routes" 
import { AuthRoutes } from "./auth.routes" 

export function Routes() {
  const user = true
  return (
    <BrowserRouter>
    { user ? <CustomerRoutes /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}