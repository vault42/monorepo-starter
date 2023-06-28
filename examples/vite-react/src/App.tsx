import { Button } from '@42arch/react-components'
import { useLastVisitDate } from '@42arch/react-hooks'

const formatDate = (d: string) => {
  const date = new Date(d)
  return date.toLocaleString()
}

export default function Page() {
  const lastVisitDate = useLastVisitDate()
  const a = 12
  console.log(2222333)

  return (
    <div>
      <Button>Hello</Button>
      <h1>
        {lastVisitDate === null && "Hello, it's first time you visit us !"}
        {lastVisitDate && `Last Visit: ${formatDate(lastVisitDate)}`}
      </h1>
    </div>
  )
}
