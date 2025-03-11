import { DessertCart } from "./components/DessertCart";
import { DessertList } from "./components/DessertList";
import { OrderConfirmation } from "./components/OrderConfirmation";

export function DessertApp() {
  


  return (
    <>
      <main className="relative min-h-screen bg-m-Rose50 py-12">
        <div className="container mx-auto px-4  grid lg:grid-cols-12 items-start space-x-0 lg:space-x-8 space-y-8 md:space-y-0"> 
          <DessertList />
          <DessertCart />
        </div>

        <div>
            <OrderConfirmation />
        </div>
      </main>
    </>
  )
}

