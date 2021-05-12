import logo from './logo.svg';
import './App.css';
// import AuthLayout from './Pages/Auth/AuthLayout'
import { useQuery } from '@apollo/client';
import { GET_AUTH_USER } from './graphql/user';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Pages/Landing';
import HomeApp from './Pages/HomeApp';
import AuthState from "./Context/auth/AuthState";
import * as Routes from "./routes";
import PrivateRoute from './Components/Routing/PrivateRoute';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';

function App() {
    const { loading,loadUser, error, data: authData } = useQuery(GET_AUTH_USER); 
    console.log(authData);
  
    // const [user, setUser] = useState();
    // const userValue = {user, setUser}
    if(authData){
      console.log(authData.getAuthUser.id);
    }
    if(loading) return <Box>
      Loading....
      </Box>;

  return (
    <>
    <AuthState>
      <Router>
            <Switch>
              <PrivateRoute exact path={Routes.HOME} component={HomeApp}  />
              <Route exact path={Routes.LANDING} component={Landing} />
            </Switch>
        </Router > 
    </AuthState>
      
    </>
   


  );
}

export default App;



