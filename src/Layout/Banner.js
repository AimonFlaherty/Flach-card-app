import React from "react";
import CreateBtn from "./home/CreateBtn";
import BannerPath from "./components/BannerPath";
import { Route, Switch } from "react-router-dom";

function Banner(){
    return(
        <React.Fragment>
            <Switch>
                <Route exact={true} path="/">
                    <CreateBtn />
                </Route>
                <Route >
                    <BannerPath title={"eh"} />
                </Route>
            </Switch>
        </React.Fragment>
    );
}
export default Banner;