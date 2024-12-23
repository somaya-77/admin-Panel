import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const sectionOne = [
  { text: "Dashboard", path: "/", icon: <HomeOutlinedIcon /> },
  { text: "Manage Team", path: "/team", icon: <PeopleOutlineOutlinedIcon /> },
  {
    text: "Contacts Information",
    path: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    text: "Invoices Balances",
    path: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
];

export const sectionTwo = [
  {
    text: "Profile Form",
    path: "/profile",
    icon: <PersonOutlineOutlinedIcon />,
  },
  { text: "Calendar", path: "/calendar", icon: <CalendarTodayOutlinedIcon /> },
  {
    text: "FAQ Page",
    path: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
  },
];

export const sectionThree = [
  { text: "Bar Chart", path: "/bar", icon: <BarChartOutlinedIcon /> },
  { text: "Pie Chart", path: "/pie", icon: <PieChartOutlineOutlinedIcon /> },
  {
    text: "Line Chart",
    path: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    text: "Geography Chart",
    path: "/geography",
    icon: <MapOutlinedIcon />,
  },
];
