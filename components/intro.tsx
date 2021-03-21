import InputOutlinedIcon from '@material-ui/icons/InputOutlined'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { settingsUpdateLang } from '../lib/store/actions/users/settings'
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#fffff',
      
    },
  }),
)

const Intro = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const setupUser = () => {
    const newLang = 'en'
    dispatch(settingsUpdateLang(newLang))
  }
  return (
    <section className={`${classes.root} flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12`}>
       <AppBar color="inherit">
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={10}>
                <Typography variant="h5">
                  FBANK
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <a onClick={() => setupUser()} className="md:text-right font-bold tracking-tighter leading-tight">
                  Sign In &nbsp;
                  <InputOutlinedIcon></InputOutlinedIcon>
                </a>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    </section>
  )
}

export default Intro
