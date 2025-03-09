import { useDessertStore } from "../store"
import { DessertItem } from "./DessertItem"



export const DessertList = () => {

    const desserts = useDessertStore(state => state.desserts)

  return (
    <>
        <section className="lg:col-start-1 lg:col-end-8  xl:col-start-1 xl:col-end-9">
            <h1 className="font-bold text-4xl pb-8">Desserts</h1>

            <section className="grid grid-cols-1  sm:grid-cols-2   xl:grid-cols-3 gap-6">
                {desserts.map((dessert) => (
                    <DessertItem key={dessert.name} dessert={dessert} />
                ))}
            </section>    
        </section>
    </>
  )
}
