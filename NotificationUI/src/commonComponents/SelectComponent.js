import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(4),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));

export default function SelectContainer({ TypeOfRecipient, handleChangeRecipient }) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        handleChangeRecipient(event.target.value);

    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Recipient Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
            >{TypeOfRecipient.map((element) =>
                <MenuItem value={element}>{element}</MenuItem>
            )}

            </Select>
        </FormControl>

    );
}