import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columnsContacts, rowsContacts } from '../../data';

export default function Invoices() {
  return (
    <Box sx={{ minHeight: 650, width: '95%', mx: 'auto' }}>
      <DataGrid
      checkboxSelection
        rows={rowsContacts}
        // @ts-ignore
        columns={columnsContacts} />
    </Box>)
}
