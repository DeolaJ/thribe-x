import { ReactNode } from "react"
import NewHeader from "../components/NewHeader"
import NewFooter from "../components/NewFooter"

type LayoutProps = {
  children: ReactNode
}

const RootLayout = ({children}:LayoutProps) => {
  return (
    <div className=" ">
      <NewHeader/>
      <div className="bg-[#F9F9F9]">
      {children}
      </  div>
      <NewFooter/>
    </div>
  )
}

export default RootLayout