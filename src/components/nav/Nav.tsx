
'use client'

import NavOnline from "./NavOnline"
import NavOffline from "./NavOffline"

function Nav () {
  return (
    <>
    {false ?
      <NavOnline />
      :
      <NavOffline />
    }
    </>
  )
}

export default Nav