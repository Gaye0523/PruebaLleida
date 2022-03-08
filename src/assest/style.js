import { makeStyles } from "@material-ui/core/styles";

export const useStyle = makeStyles((theme) => ({

  containerApp: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  //#region Navbar
  MuiAppBarGradiant: {
    width: '100%',
    height: '80px'
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: "30px",
  },

  //region Users

  login: {
    padding: '20',
    height: '70vh',
    width: '280px',
    margin: '20px auto',
  },
  avatar: {
    backgroundColor: "#0992af",
    marginTop: '18%'
  },
  logo: {
    backgroundColor: "#0992af",
  },
  form: {
    width: '80%',
    marginLeft: '10%',
  },
  button: {
    marginTop: '8%'
  },

  containerForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20',
    height: '79vh',
    width: '280px',
    margin: '20px auto',
  },

  title: {
    marginTop: '30px',
    width: '100%',
    height: '10%',
    textAlign: 'center',
  },
  containerInputs: {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-around',
  },

  inputs: {
    marginTop: '10px'

  },
  containerNumber: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',

  },
  autocomplete: {
    width: '100%'
  },
  textField: {
    marginTop: '30px',
  }

}));