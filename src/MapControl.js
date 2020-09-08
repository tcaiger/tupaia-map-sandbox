import React from "react";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const ControlWrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 10px;
  border-radius: 3px;
  background: white;
  padding: 5px 0 5px 10px;
  z-index: 1000;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const MapControl = ({ controls, values, onChange, ...props }) => (
  <ControlWrapper {...props}>
    <FormControl component="fieldset">
      <FormGroup>
        {controls.map((c) => (
          <FormControlLabel
            key={c.name}
            control={
              <Checkbox
                size="small"
                checked={values[c.name]}
                onChange={(event) => onChange(c.name, event.target.checked)}
                name={c.name}
              />
            }
            label={c.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  </ControlWrapper>
);
