import {Switch, Route, Redirect} from 'react-router-dom'
import ViewDetails from './components/ViewDetails'
import UpdateForm from './components/UpdateForm'
import AddUserDetails from './components/AddUserDetails'
import './App.css';

function App() {
  return (
   <Switch>
    <Route exact path='/users' component={ViewDetails} />
    <Route exact path='/user/:id' component={UpdateForm} />
    <Route exact path='/users/add' component={AddUserDetails} />
    <Redirect to='/users' />
   </Switch>
  );
}

export default App;
