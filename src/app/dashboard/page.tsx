"use client";
import BackButton from "@/Components/animate/BackButton";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled component for Status cell with dynamic background and text color
const StatusCell = styled(TableCell)(({ status }: { status: string }) => {
  let bgcolor, color;

  switch (status) {
    case "Pending":
      bgcolor = "#FFF3E0"; // Light orange
      color = "#FF9800"; // Orange
      break;
    case "Approved":
      bgcolor = "#E8F5E9"; // Light green
      color = "#4CAF50"; // Green
      break;
    case "Canceled":
      bgcolor = "#FFEBEE"; // Light red
      color = "#F44336"; // Red
      break;
    default:
      bgcolor = "#F5F5F5"; // Light grey fallback
      color = "#000000"; // Black fallback
  }

  return {
    backgroundColor: bgcolor,
    color: color,
    fontWeight: "bold",
    textAlign: "center",
  };
});

// Sample data for the table
const tableData = [
  { id: 1, name: "John Doe", course: "E-invoice", status: "Pending", certificate: "certificate1.pdf" },
];

export default function Dashboard() {
  // Function to handle file download (mock implementation)
  const handleDownload = (filename: string) => {
    const fileUrl = `/files/${filename}`; // Replace with actual file path or URL
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className=" flex flex-col items-center justify-center h-screen  my-auto mx-auto">
      {/* Back Button */}
     

      {/* Card Component */}
      <Card sx={{ maxWidth: 1200, margin: "0 auto" }}>
      <div className=" flex items-start justify-start my-5 px-5 ">
        <BackButton />
      </div>
        <CardContent>
          {/* Title */}
          <Typography
            textAlign="left"
            variant="h5"
            component="div"
            gutterBottom
            sx={{ marginBottom: "20px",marginTop: "20px" }}
          >
            Certificate Table
          </Typography>

          {/* Table Container */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="certificate table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Requested</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Status</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Certificate</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.course}</TableCell>
                    {/* Status Cell with dynamic styling */}
                    <StatusCell status={row.status}>{row.status}</StatusCell>
                    {/* Certificate Cell with downloadable link */}
                    <TableCell align="center">
                      <Link
                        component="button"
                        variant="body2"
                        onClick={() => handleDownload(row.certificate)}
                        sx={{ cursor: "pointer", color: "#1976D2" }}
                      >
                        {row.certificate}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
}