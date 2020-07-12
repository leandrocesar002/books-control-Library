import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  textField: {
    marginTop: 15,
    fontSize: 16,
    width: 400,
    height: 49,
    paddingTop: 15,
    background: 'white',
  },
  input: {
    backgroundColor: 'primary',
    marginTop: 12,
  },
  margin: {
    margin: theme.spacing(2),
    width: 400,
  },
}));
