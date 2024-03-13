import {Button} from "@/components/ui/button.tsx";
import {Slider} from "@/components/ui/slider.tsx";


function App() {

    const sliderHandler = (value: number[]) => {
        console.log(value)
    }


  return (
    <>
        <h1 className={"text-cyan-700 text-2xl"}>fuk</h1>
        <Button variant={"outline"}>Button</Button>
        <Slider defaultValue={[3]} max={5} step={1} className={"w-1/2"} onValueChange={sliderHandler} />
    </>
  )
}

export default App
