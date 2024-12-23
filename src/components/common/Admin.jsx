import { Avatar, Box, Typography } from "@mui/material";

export default function Admin({ theme, open }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Avatar
        sx={{
          border: "2px solid white",
          mx: "auto",
          marginY: 1,
          transition: 0.25,
          width: open ? 88 : 44,
          height: open ? 88 : 44,
        }}
        alt="Somaya"
        src="https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288870.jpg?t=st=1719049597~exp=1719053197~hmac=8dc2d07b4e875dec1d8760048aedee4a40098cc063609281a544a734ba551a01&w=740"
      />
      <Typography sx={{ transition: 0.25, fontSize: open ? 17 : 0 }}>
        Somaya Elkhateeb
      </Typography>
      <Typography
        sx={{
          transition: 0.25,
          fontSize: open ? 17 : 0,
          color: theme.palette.primary.main,
        }}
      >
        Admin
      </Typography>
    </Box>
  );
}
