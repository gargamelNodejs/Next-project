import { useRouter } from 'next/router'


export default function Id() {
  const router = useRouter()
  const { name, id } = router.query || []

  return (
    <>
      <h1> ID:  {name}  </h1>
      <h1> ID: {id}  </h1>
    </>
  )
}
