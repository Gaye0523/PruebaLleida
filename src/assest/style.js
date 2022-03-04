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

    login:{
      padding: '20',
      height: '70vh',
      width: '280px',
      margin: '20px auto', 
    }, 
    avatar:{
      backgroundColor: "#0992af",
      marginTop: '18%'
    },
    form:{
      width: '80%',
      marginLeft: '10%',
    },
    button:{
      marginTop: '8%'

    }

  
  }));