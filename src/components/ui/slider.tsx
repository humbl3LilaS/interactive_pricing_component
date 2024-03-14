import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-emptySlider">
      <SliderPrimitive.Range className="absolute h-full bg-slider dark:bg-neutral-50" />
    </SliderPrimitive.Track>
    {/*focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 */}
    <SliderPrimitive.Thumb className="block h-10  aspect-square rounded-full border border-slider bg-sliderImg bg-slider bg-center bg-no-repeat  transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer " />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
