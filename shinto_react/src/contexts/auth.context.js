import React , {useState, useEffect} from 'react';
import apiClient from '../utils/api-client';
import Home from '../pages/Home'

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

function AuthProvider(props){
    const [user, setUser]= useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess]= useState(false);

    const login = React.useCallback(
        (creds)=>{
            setIsLoading(true);
            apiClient.auth.login(creds).then((user)=>{
                setIsLoading(false);
                setIsSuccess(true);
                setUser({user});

            });
        },
            [setUser]
    );

    const signup =  React.useCallback(
        (creds) => apiClient.auth.signup(creds).then((user)=> setUser({ user })),
        [setUser]
    );

    const logout = React.useCallback(()=>{
        apiClient.auth.logout();
        setUser(null);
    }, [setUser]);

    useEffect(() => {
        setIsLoading(true);
        apiClient.auth
          .me()
          .then(({ data }) => {
            setIsLoading(false);
            setIsSuccess(true);
            setUser(data.user || null);
          })
          .catch(() => {
            setIsLoading(false);
          });
      }, [setUser, setIsLoading, setIsSuccess]);
      console.log(
        `[DEBUG] AuthProvider(context) data :: ${JSON.stringify(
          { user, isLoading, isSuccess },
          null,
          2
        )}`
      );

    if (isLoading){
        return <h2>Loading... Ups Something is wrong with your pass orn your user </h2>
    }

    if (isSuccess){
        return(
            <AuthContext.Provider
            value={{user, login, signup,logout}}
            {...props}
            />
        );
    }
    return <h1>Error loading</h1>;
}
export function useAuth(){
    return React.useContext(AuthContext);
}
export default AuthProvider;

  