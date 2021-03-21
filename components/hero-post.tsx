import React from 'react'
import { settingsUpdateLang } from '../lib/store/actions/users/settings'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import { string, object } from 'yup'
import { Formik, Form, ErrorMessage } from 'formik'
import { TransitionProps } from '@material-ui/core/transitions'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Input from '@material-ui/core/Input'
import List from '@material-ui/core/List'
import API from '../lib/api/api'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { useDispatch } from "react-redux"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#ff6f00'
    },
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    width100: {
      width: '100%'
    },
    margin: {
      margin: theme.spacing(1),
    },
    card: {
      borderRadius: '20px',
      padding: '20px',
    },
    button: {
      width: '100%',
      textTransform: 'none',
      height: '50px',
      borderRadius: '25px',
      border: 'none',
     
      outlineStyle: 'none',
      //outline: 0px auto -webkit-focus-ring-color,
      outlineOffset: '0px',
      outline: '0px',
      '&:focus': {
        outline: '0px'
      }
    },
    iconButton: {
      paddingLeft: '10px',
      fontSize: '24px',
    },
    textSecondary: {
      color: '#bdbdbd',
      fontSize: '24px',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: 700,
    },
    dialog: {
      height: '100%',
      width: '100%'
    },
    dialogTitle: {
      backgroundColor: '#f5f5f5',
      height: '100%'
    }
  }),
)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const HeroPost = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [referenceUser, setReferenceUser] = React.useState('')

  const dispatch = useDispatch()

  const handleClickOpen = (cpf: string) => {
    setOpen(true);
    setReferenceUser(cpf)
  }

  const form = { password: '', userName: '' }
  const sendData = () => {
    API.accounts.post({
      ...form, referenceUser
    } as any).then(() => {
      const newLang = 'en'
      dispatch(settingsUpdateLang(newLang))
    })
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  return (
    <section >
      <div className="mb-8 md:mb-16">
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="h3" component="h2">
            <strong>FBANK</strong>: um novo jeito de fazer transferências e pagamentos
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src="assets/blog/dynamic-routing/e15fdae704986353baa4578b5a50149a-pix-transfer@1x.png" />
        </Grid>
        <Grid item xs={4}>
        
      {/* end::Head */}
      <Formik
        initialValues={{ referenceUser: '',  password: '', userName: ''}}
        validationSchema={object().shape({
          referenceUser: string().required('Is Required!')
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit
          } = props
          return (
            <Form
            onSubmit={handleSubmit}
          >
            <Card className={classes.card}>
            <CardContent>
              <p className="text-6xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8">
                Abra sua conta na FBANK
              </p>
              <br/>
              <Typography variant="h5" component="h2">
             
                    <TextField
                      className={classes.width100}
                      error={Boolean(errors.referenceUser) && touched.referenceUser}
                      value={values.referenceUser}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label='Digite seu CPF'
                      name='referenceUser'
                      fullWidth
                    />
                    {touched.referenceUser && errors.referenceUser ? (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'></div>
                      </div>
                    ) : null}
                    <ErrorMessage name='referenceUser' component='div' />
            
              </Typography>
              <br/>
            </CardContent>
            <CardActions>
              <Button onClick={() => { handleClickOpen(values.referenceUser) }} disableRipple className={`${classes.button} textSizeSmall`} variant="outlined" type='submit'>
                <span className={`${classes.textSecondary} text-secondary md:pr-16`} >Continuar</span>
                <ArrowForwardIcon color="disabled" fontSize="small" ></ArrowForwardIcon>
              </Button>
            </CardActions>
          </Card>
          </Form>
          )
        }}
      </Formik>
      {/*end::Form*/}
        </Grid>
      </Grid>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <Grid className={classes.dialog} container spacing={3}>
          <Grid item xs={1} className={classes.dialogTitle}></Grid>
          <Grid item xs={4} className={classes.dialogTitle}>
            <br/>
            <br/>
            <Typography variant="h3" component="h2">
              <strong>Complete os campos ao lado para pedir sua Conta</strong>
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.dialogTitle}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
          <List>
            <ListItemIcon></ListItemIcon>
              <ListItem key="1" role={undefined}>
              <TextField value={referenceUser} disabled fullWidth id="standard-basic"  label="CPF" />
              </ListItem>
            </List>
            <List>
            <ListItemIcon></ListItemIcon>
              <ListItem key="1" role={undefined}>
              <TextField
                onChange={($event) => {form.userName = $event.target.value}}
                fullWidth
                id="standard-basic"
                label="Nome Completo" />
              </ListItem>
            </List>
            <List>
            <ListItemIcon></ListItemIcon>
              <ListItem key="1" role={undefined} dense>
              <Input
                fullWidth
                id="standard-basic"
                placeholder="Senha"
                onChange={($event) => {form.password = $event.target.value}}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                type={values.showPassword ? 'text' : 'password'}
                />
              </ListItem>
            </List>

            <List>
            <ListItemIcon></ListItemIcon>
              <ListItem key="1" role={undefined} dense>
              <Button
                disableRipple
                className={`${classes.button} textSizeSmall`}
                variant="outlined"
                onClick={sendData}>
                <span className={`${classes.textSecondary} text-secondary md:pr-16`} >Enviar</span>
                <ArrowForwardIcon color="disabled" fontSize="small" ></ArrowForwardIcon>
              </Button>
              </ListItem>
            </List>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
      </Dialog>
    </section>
  )
}

export default HeroPost
