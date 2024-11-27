import {useEffect,useState} from 'react'
export const Message = () => {
    const [coors, setCoors] = useState("")

    useEffect(() => {
        
      const onMouseMove = ({x,y}) =>{
       setCoors({x,y})
      }
      window.addEventListener('mousemove',onMouseMove)

      return () => {
      window.removeEventListener('mousemove',onMouseMove)
      }
    }, [])
    
  return (
    <>
    <h2>Usuario ya existe</h2>
    {JSON.stringify(coors)}
    </>
  )
}
