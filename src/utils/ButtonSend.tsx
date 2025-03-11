import { ReactNode } from "react"

type ButtonSendProps = {
  children: ReactNode
}


export const ButtonSend = ({children}:ButtonSendProps) => {
  return (
    <button data-modal-target="default-modal" type="button" className="bg-m-Red transition-all duration-150 block w-full text-m-Rose50 py-4 rounded-4xl font-semibold cursor-pointer hover:bg-m-Red-hover">
        {children}
    </button>
  )
}
