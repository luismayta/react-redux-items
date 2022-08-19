import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Copyright from '../../components/share/copyright'
import SideBar from '@material-ui/core/SideBar'

class HomePage extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h3" variant="h5">
          Sign in
        </Typography>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
  }
}

export default HomePage
