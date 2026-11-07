import { useEffect, useState } from "react"

export const Animation__text = ({text} : {text:string}) => {
  const [writeText, setWriteText] = useState('')
 
 


  useEffect(() => {
    if (writeText.length >= text.length) return

    const timer = setTimeout(() => {
      setWriteText(text.slice(0, writeText.length + 1))
    }, 75)

    return () => clearTimeout(timer)


  }, [writeText])

  return (
    <>
      <p className="text-center text-3xl font-bold">

      {writeText}
        <span className="animate-pulse"> |</span>
      </p>

    </>
  )

}