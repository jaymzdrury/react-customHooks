import { ReactNode } from 'react'

function MarginTop({children}:{children: ReactNode}) {
  return <div style={{marginTop: 20}}>{children}</div>
}
export default MarginTop