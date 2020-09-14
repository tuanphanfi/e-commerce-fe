const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
    </Switch>
  );
};
export default Routes;
    