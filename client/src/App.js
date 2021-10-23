import logo from './logo.svg';
import './App.css';
// import AuthLayout from './Pages/Auth/AuthLayout'
import { useQuery } from '@apollo/client';
import { GET_AUTH_USER } from './graphql/user';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import HomeApp from './Pages/HomeApp';
import Customers from './Pages/Customers'
import Team from './Pages/Team'
import AuthState from "./Context/auth/AuthState";
import * as Routes from "./routes";
import PrivateRoute from './Components/Routing/PrivateRoute';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000', //OR red['A400'] for the accent range
      contrastText: '#fff', // The text color to use
      // You can also specify light, dark variants to use (it's autocomputed otherwise)
    }


  },
});
function App() {
    const { loading,loadUser, error, data: authData } = useQuery(GET_AUTH_USER); 
  
    // const [user, setUser] = useState();
    // const userValue = {user, setUser}
    if(authData){
      console.log(authData.getAuthUser.id, 'authdata');
    }
    if(loading) return <Box>
      Loading....
      </Box>;

  return (
    <>
  <MuiThemeProvider theme={theme}>
    <AuthState>
      <Router>
            <Switch>
              <PrivateRoute exact path={Routes.HOME} component={HomeApp}  />
              <PrivateRoute exact path={Routes.TEAM} component={Team}  />
              <PrivateRoute exact path={Routes.CUSTOMERS} component={Customers}  />
              <Route exact path={Routes.LANDING} component={Landing} />
            </Switch>
        </Router > 
    </AuthState>
    </MuiThemeProvider>
      
    </>
   


  );
}

export default App;



