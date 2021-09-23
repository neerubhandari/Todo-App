import { Route, Redirect } from 'react-router-dom';
function ProtectedRoute({ component: Component, Login, ...rest }: any) {
    return (
        <div>
            <Route {...rest} render={(props) => {
                if (Login) return <Component {...rest} {...props} />
                else
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
            }} />
        </div>
    )
}
export default ProtectedRoute;
