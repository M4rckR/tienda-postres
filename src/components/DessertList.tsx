import Skeleton from "react-loading-skeleton"
import { useDessertStore } from "../store"
import { DessertItem } from "./DessertItem"
import { useEffect, useState } from "react"



export const DessertList = () => {

    const [isloading, setIsLoading] = useState<boolean>(true)

    const desserts = useDessertStore(state => state.desserts)



    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false); 
        }, 2000); 
      }, []);
    

  return (
    <>
        <section className="lg:col-start-1 lg:col-end-8  xl:col-start-1 xl:col-end-9">
            <h1 className="font-bold text-4xl pb-8">Desserts</h1>
            
            <section className="grid grid-cols-1  sm:grid-cols-2   xl:grid-cols-3 gap-6">
                {
                
                isloading? (
                    <>
                        <Skeleton  className="mb-2" height={350} count={2} />
                        <Skeleton  className="mb-2" height={350} count={2} />
                        <Skeleton  className="mb-2" height={350} count={2} />
                    </>
                ):  (
                    

                    desserts.map((item) => (
                        <div key={item.id}>  
                            <DessertItem dessert={item} />
                        </div>
                    ))
                )
            }

            </section>    
        </section>
    </>
  )
}
