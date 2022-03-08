import React, { useState } from "react";
import { Formik, Form} from "formik";
import {
    Grid,
    Paper,
    FormControl,
    TextField,
    Typography
} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios'
import Flag from 'react-world-flags';
import { useStyle } from "../assest/style";


const SendMessage = () => {
    const classes = useStyle();

    const countries = [
        { value: '+57', label: 'Colombia', flagCode: 'COL' },
        { value: '+34', label: 'España', flagCode: 'ESP' },
    ]



    return (
        <Grid container>
            <Paper elevation={10} className={classes.containerForm} >
                <div className={classes.title}>
                    <Typography variant="h6">
                        Send Message
                    </Typography>
                </div>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        user: '',
                        password: '',
                        code: '',
                        number: '',
                        message: ''
                    }}
                    onSubmit={(values) => {
                        console.log("valores", values)
                        const json = {
                            "sms": {
                                "user": values.user,
                                "password": values.password,
                                "dst": {
                                    "num": [values.number]
                                },
                                "txt": values.message
                            }
                        }
                        console.log("valores", json)
                        axios.post(`https://api.lleida.net/sms/v2/`, json)
                            .then((result) => {
                                if (result.status === 200) {
                                    alert("Mensaje Enviado con exito!")
                                }
                            }).catch(error => {
                                alert(`Ocurrio un error desconocido: ${error}`);
                            })
                    }}
                >
                    {({ handleSubmit, handleChange, handleBlur, values }) => (
                        <Form className={classes.containerInputs} onSubmit={handleSubmit}>
                            <FormControl>
                                <TextField
                                    className={classes.inputs}
                                    name="user"
                                    label="Enter User"
                                    required
                                    value={values.user}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <TextField
                                    className={classes.inputs}
                                    name="password"
                                    label="Enter Password"
                                    type="password"
                                    required
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className={classes.containerNumber}>
                                    <Autocomplete
                                        id="country-select-demo"
                                        options={countries}
                                        className={classes.code}
                                        autoHighlight
                                        getOptionLabel={(option) => option.value}
                                        renderOption={(option) => (
                                            <React.Fragment>
                                                <Flag code={option.value} height="16" />
                                                &nbsp;({option.value}) {option.label}
                                            </React.Fragment>
                                        )}
                                        renderInput={(params) => (
                                            <div className={classes.flagContainer}>
                                                <TextField
                                                    className={classes.fieldWrapper}
                                                    {...params}
                                                    label="Enter Code"
                                                    variant="outlined"
                                                    value={values.code}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password'
                                                    }}
                                                />
                                            </div>
                                        )}

                                    />
                                    <TextField
                                        className={classes.inputs}
                                        name="number"
                                        label="Enter Number"
                                        required
                                        value={values.number}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                <TextField
                                    className={classes.inputs}
                                    name="message"
                                    label="Enter Message"
                                    required
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                            </FormControl>
                            <button
                                className={classes.button}
                                type="submit"
                                color="primary"
                                variant="contained"
                            >
                                Send Message
                            </button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
}
export default SendMessage;