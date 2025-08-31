import { Box } from '@chakra-ui/react'
import { NavBar } from '../NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavBar/>,
      <Box padding={10}><Outlet/></Box>
    </>
  )
}

export default Layout
