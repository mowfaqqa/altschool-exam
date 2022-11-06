import { useEffect, useState } from "react"

export default function useCounter(initialCount , countBy) {


  const [value, setValue] = useState(initialCount)

  useEffect(() => {

    setValue(initialCount)
    
  }, [initialCount, countBy])

  const increment = () => {
    setValue(prev => prev + Number(countBy))
  }

  const decrement = () => {
    if (value - countBy < 0) return
    setValue(prev => prev - Number(countBy))
  }

  const reset = () => {
    setValue(Number(initialCount))
  }

  return { value, setValue, increment, decrement, reset }
}
