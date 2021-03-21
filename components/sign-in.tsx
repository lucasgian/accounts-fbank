import React from 'react'
import Author from '../types/author'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'
import { string, object } from 'yup'
import { Formik, Form, ErrorMessage } from 'formik'
import { TransitionProps } from '@material-ui/core/transitions'
import List from '@material-ui/core/List'
import API from '../lib/api/api'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

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

const SignIn = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  return (
    <section >
      <div className="mb-8 md:mb-16">
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={5}>
      {/* end::Head */}
      <Formik
        initialValues={{ referenceUser: '', password: '' }}
        validationSchema={object().shape({
          referenceUser: string().required('Is Required!'),
          password: string().required('Is Required!')
        })}
        onSubmit={async (values, {}) => {
          API.accounts.auth(values as any).then(() => {
            window.location.href = 'http://localhost:8888'
          })
        }}
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
                Faça seu login
              </p>
              <br/>
              <List>
            <ListItemIcon></ListItemIcon>
              <ListItem key="1" role={undefined}>
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
              </ListItem>
            </List>
            <List>
            <ListItemIcon></ListItemIcon>
              <ListItem key="1" role={undefined}>
              <TextField
                fullWidth
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="Senha"
                name="password"
                type="password" />
              </ListItem>
            </List>
              <br/>
            </CardContent>
            <CardActions>
              <Button disableRipple className={`${classes.button} textSizeSmall`} variant="outlined" type='submit'>
                <span className={`${classes.textSecondary} text-secondary md:pr-16`} >Entrar</span>
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
        <Grid item xs={4}></Grid>
      </Grid>
    </section>
  )
}

export default SignIn
