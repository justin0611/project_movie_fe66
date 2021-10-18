import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";


export const CheckoutTemplate = (props) => { //props = {path, excat, Component}
    const { Component, ...restProps } = props;

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }

    return <Route {...restProps} render={(propsRoute) => {

        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>

    }} />
}