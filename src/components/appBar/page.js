import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Autocomplete from '../autoComplete'
import './style.css'

function Page(props) {
  const { text, suggestions, onChangeText, onChangeSelection } = props

  return (
    <AppBar position="static">
      <Toolbar className="appbar">
        <Typography variant="h6" color="inherit">
          React Redux Items
        </Typography>

        <Autocomplete
          text={text}
          suggestions={suggestions}
          onChangeText={onChangeText}
          onChangeSelection={onChangeSelection}
        />

        <AccountCircle />
      </Toolbar>
    </AppBar>
  )
}

export default Page
