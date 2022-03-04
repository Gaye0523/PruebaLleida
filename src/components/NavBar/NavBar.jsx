import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tab, Tabs } from "@material-ui/core";
import { useStyle } from "../../assest/style";


function Navbar() {
    const classes = useStyle();
    let location = useLocation();

    const routes = ["/", "/SendMessage"]

    return (
            <AppBar position="static" color="transparent" className={classes.MuiAppBarGradiant}>
                <Toolbar className={classes.root}>
                    <Tabs
                        value={location.pathname }
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab
                            label='Login'
                            disableRipple
                            value={routes[0]}
                            component={Link}
                            to={routes[0]}
                        />

                        <Tab
                            label='Send Message'
                            disableRipple
                            value={routes[1]}
                            component={Link}
                            to={routes[1]}
                        />
                    </Tabs>
                </Toolbar>
            </AppBar>
    );
}
export default Navbar;