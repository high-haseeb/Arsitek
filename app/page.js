import { App } from "@/components/App"
import { Underlay, Overlay } from "@/components/Underlay"

const Page = () => {
  return (
    <>
      <Underlay />
      <App />
      <Overlay />
    </>
  )
}
export default Page;
