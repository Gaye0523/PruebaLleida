import React, { useState } from "react";
import { useStyle } from "../assest/style";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import { LockOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function Login(props) {

    const classes = useStyle();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    

    const handleSubmit = (e) => {
        e.preventDefault()
       history.push('/user')
    }

    return (
        <Grid container>
            <Paper elevation={10} className={classes.login} >
                <Grid align="center">
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <h2> Sing In </h2>
                </Grid>
                <div className={classes.form}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Username"
                            placeholder="Enter userName"
                            fullWidth
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
                            fullWidth
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