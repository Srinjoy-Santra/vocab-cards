import React from 'react';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { authActions } from '../../../redux/auth';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    return errors
};

const formFields = [
    {
        size: 12,
        field: (
            <TextField
                label="Full Name"
                name="name"
                margin="none"
                required={true}
            />
        ),
    },
    {
        size: 12,
        field: (
            <TextField
                label="Email ID"
                name="email"
                margin="none"
                required={true}
            />
        ),
    },
    {
        size: 12,
        field: (
            <TextField
                label="Password"
                name="password"
                type="password"
                margin="none"
                required={true}
            />
        ),
    }
];

const RegisterForm = (props) => {
    const dispatch = useDispatch();

    const onSubmit = async values => {
        //const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        //await sleep(300);
        //window.alert(JSON.stringify(values, 0, 2));
        authActions.register(dispatch, values);
        authActions.setAuthModal(dispatch, false);
    };

    return (
        <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
            <Typography variant="h4" align="center" component="h1" gutterBottom color='secondary'>
                Register
            </Typography>
            <Form
                onSubmit={onSubmit}
                initialValues={{ name: 'John Doe', email: 'abc@xyz.com' }}
                validate={validate}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 16 }}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                {formFields.map((item, idx) => (
                                    <Grid item xs={item.size} key={idx}>
                                        {item.field}
                                    </Grid>
                                ))}
                                <Grid item style={{ marginTop: 16 }}>
                                    <Button
                                        type="button"
                                        variant="contained"
                                        onClick={form.reset}
                                        disabled={submitting || pristine}
                                    >
                                        Reset
                                    </Button>
                                </Grid>
                                <Grid item style={{ marginTop: 16 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                                <Grid item style={{ marginTop: 16, marginRight: 0 }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={props.toggle}
                                    >
                                        Sign in
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
        </div>

    )
}

export default RegisterForm;