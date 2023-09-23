import React from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const RadioFilter = (props) => {
    return (
        <FormControl component="fieldset">
            {props.label &&
                <FormLabel component="legend">{props.label}</FormLabel>
            }
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value={props.value}
                        onChange={event => props.setValue(event.target.value)}
            >
                {props.values.map(el =>
                    <FormControlLabel value={el.value} control={<Radio size={"small"} color="primary"/>} label={el.label}
                                      key={el.label}/>)
                }
            </RadioGroup>
        </FormControl>
    );
};
export default RadioFilter;