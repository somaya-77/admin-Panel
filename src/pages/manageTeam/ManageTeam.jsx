import { DataGrid } from '@mui/x-data-grid';
import { rowsTeam } from '../../data';
import { Box, Typography, useTheme } from '@mui/material';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';



export default function ManageTeam() {
  const theme = useTheme();

  const columnsTeam = [
    { field: 'id', headerName: 'ID', width: 33 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'age', headerName: 'Age' },
    { field: 'phone', headerName: 'Phone', flex: 1 },
    {
      field: 'access', headerName: 'Access', flex: 1, align: 'center', headerAlign: 'center', renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            gap: "9px",
            p: "5px",
            m: "0 auto",
            mt: "8px",
            borderRadius: "3px",
            alignItems: "center",
            width: "100px",
            background: access === 'Admin' ? theme.palette.primary.dark : access === 'Manager' ? theme.palette.secondary.dark : "#3da58a"
          }}>
            {access === 'Admin' ? <AdminPanelSettingsOutlined fontSize='small' sx={{ color: 'white' }} /> : access === 'Manager' ? <SecurityOutlined fontSize='small' sx={{ color: 'white' }} /> : <LockOpenOutlined fontSize='small' sx={{ color: 'white' }} />}
            <Typography sx={{ fontSize: "13px", color: 'white' }}>{access}</Typography>
          </Box>
        )
      }
    },
  ];


  return (
    <Box sx={{ minHeight: 650, width: '95%', mx: 'auto' }}>
      <DataGrid rows={rowsTeam}
        // @ts-ignore
        columns={columnsTeam} />
    </Box>
  )
}
