import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columnsContacts, rowsContacts } from '../../data';

export default function Contacts() {
  
  return (
    <Box sx={{ minHeight: 650, width: '95%', mx: 'auto' }}>
      <DataGrid 
      slots={{
        toolbar: GridToolbar
      }}
      rows={rowsContacts}
        // @ts-ignore
        columns={columnsContacts} />
    </Box>)
}
