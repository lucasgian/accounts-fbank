import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  preview?: boolean
  children: React.ReactNode
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#ff6f00'
    },
  }),
)
const Layout = ({ preview, children }: Props) => {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <Meta />
      <div className="min-h-screen" >
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </span>
  )
}

export default Layout
