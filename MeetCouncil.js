import React from 'react'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';


const MeetCouncil= () => {

    const useStyles = makeStyles(theme => ({
        div:{
            display : "flexbox"
        },
    
        subdiv1:{
          display : "flex",
          spacing : "10px",
          margin : "10px",
          padding : "10px"
        },
        subdiv2:{
            display : "flex",
            spacing : "10px",
            margin : "10px",
            padding : "10px"
          },
      per:{
          margin : "10px",
          spacing : "10px"
      }
    }))
    
    const classes = useStyles();

    return (
    <div align="center">
           <h1 align="center" style={{backgroundColor: 'black', color: 'white', padding: '5px 0px 5px 0px'}}>
            <Button component={ Link } to="/" variant="contained" style={{backgroundColor: 'black', color: 'white'}}>
              <HomeRoundedIcon fontSize='large' />
            </Button>
           </h1>

           <Typography variant="h6" style={{ color: '#143D7A', fontSize: '40px' }} align='center'>
              OUR TEAM
           </Typography>
        <div className={classes.div} align="center">
           <div className={classes.subdiv1} align="center">
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 1
                    <br />  
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 2
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 3
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 4
                    <br />
                    
                </Box>
                </div>
           </div>

           <div className={classes.subdiv2}>
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 5
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 6
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 7
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 8
                    <br />
                    
                </Box>
                </div>            
           </div>
           <div className={classes.subdiv2}>
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 9
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 10
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 11
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 12
                    <br />
                    
                </Box>
                </div>            
           </div>
           <div className={classes.subdiv2}>
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 13
                    <br />
                    
                </Box>              
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 14
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 15
                    <br />
                    
                </Box>
                </div><br /><br />
                <div className={classes.per}>
                <Box boxShadow={5}>
                    <img src="./_img/lib.png"/>
                    <br />
                    name
                    <br />
                    pos 16
                    <br />
                    
                </Box>
                </div>            
           </div>
        </div>
    </div>
    )
}      


export default MeetCouncil
