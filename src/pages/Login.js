import React, { useState } from "react";
import { useStyle } from "../assest/style";
import { useData } from "../hook/useData";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import { LockOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function Login(props) {

    const classes = useStyle();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [data] = useData(username, password)
    
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/user/${username}/${password}`)
    }

    return (
        <Grid container>
            <Paper elevation={10} className={classes.login} >
                <Grid align="center">
                    <Avatar className={classes.avatar}>
                        <LockOutlined className={classes.logo} />
                    </Avatar>
                    <h2> Sing In </h2>
                </Grid>
                <div className={classes.form}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Username"
                            placeholder="Enter userName"
                            required
                            onChange={e => setUsername(e.target.value)}
                            value={username} />
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Enter Password"
                            onChange={e => setPassword(e.target.value)}
                            value={password} />
                        <button
                            className={classes.button}
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Login
                        </button>
                    </form>
                </div>

            </Paper>
        </Grid>
    );
}

export default Login;