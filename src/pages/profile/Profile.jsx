import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from "react-hook-form";

const role = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  }
];

export default function Profile() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 3 }} direction={'row'}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) ? "this field is required" : null}
          {...register("firstName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="outlined" />

        <TextField
          error={Boolean(errors.lastName)}
          helperText={Boolean(errors.lastName) ? "this field is required" : null}
          {...register("lastName", { required: true, maxLength: 20 })}
          sx={{ flex: 1 }} label="Last Name" variant="outlined" />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "this field is required" : null}
        {...register("email", { required: true, maxLength: 20 })}
        label="Email" variant="outlined" />
      <TextField
        error={Boolean(errors.phone)}
        helperText={Boolean(errors.phone) ? "this field is required" : null}
        {...register("phone", { required: true, maxLength: 20 })}
        label="Contact Number" variant="outlined" />
      <TextField
        error={Boolean(errors.address)}
        helperText={Boolean(errors.address) ? "this field is required" : null}
        {...register("address", { required: true, maxLength: 20 })}
        multiline
        rows={5}
        defaultValue="Address"
      />

      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {role.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button type='submit' variant='contained' sx={{ textTransform: "capitalize" }}>create new user</Button>
      </Box>
    </Box>
  );
}

