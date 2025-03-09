import { DessertCart } from "./components/DessertCart";
import { DessertList } from "./components/DessertList";


export function DessertApp() {
  

  return (
    <>
      <main className="min-h-screen bg-m-Rose50 py-12">
        <div className="container mx-auto px-4  grid lg:grid-cols-12 items-start space-x-0 lg:space-x-8"> 
          <DessertList />
          <DessertCart />
        </div>
      </main>
    </>
  )
}

