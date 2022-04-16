import { useRouter } from 'next/router'
export default function One({ match }) {
  const router = useRouter()
  const { name, age, address, id } = router.query || []



  return (
    <>
      <h1>Hello my best friend, {name} </h1>
      <p>id: {id}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
    </>
  )
}
