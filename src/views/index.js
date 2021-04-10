import React, {useEffect} from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { setUserInfo,} from 'redux/actions/Auth';
import AppLayout from "layouts/app-layout";
import AuthLayout from 'layouts/auth-layout';
import AppLocale from "lang";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from 'antd';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'
import {  db } from 'auth/FirebaseAuth';

function RouteInterceptor({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: AUTH_PREFIX_PATH,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export const Views = (props) => {
   const { locale,  location, token } = props;
   // const {token} = useSelector(state => state.auth);  
   // const {locale, location} = useSelector(state => state.theme)
  const dispatch = useDispatch()
	
  const getUserInfo = async (token) => {
       await  db.collection("users").doc(token).onSnapshot((doc) => {
		  dispatch(setUserInfo(doc.data()))
   		 });
  }
  
    useEffect(() => {
	  token && getUserInfo(token); 
    }, [token]);	
	
  
  
  const currentAppLocale = AppLocale[locale];
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      <ConfigProvider locale={currentAppLocale.antd}>
        <Switch>
          <Route exact path="/">
            <Redirect to={APP_PREFIX_PATH} />
          </Route>
          <Route path={AUTH_PREFIX_PATH}>
            <AuthLayout />
          </Route>
          <RouteInterceptor path={APP_PREFIX_PATH} isAuthenticated={token}>
            <AppLayout location={location}/>
          </RouteInterceptor>
        </Switch>
      </ConfigProvider>
    </IntlProvider>
  )
}


const mapStateToProps = ({ theme, auth }) => {
  const { locale } =  theme;
  const { token } = auth;
  return { locale, token }
};

export default withRouter(connect(mapStateToProps)(Views));
// export default withRouter(Views)