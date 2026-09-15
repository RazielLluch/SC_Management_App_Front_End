import {
  CalendarDaysIcon,
  CameraIcon,
  ChartBarIcon, CircleHelpIcon, FileIcon, FileScanIcon,
  FileSpreadsheetIcon, FileTextIcon,
  LandmarkIcon, LayoutDashboardIcon, PresentationIcon, SearchIcon, Settings2Icon, ShoppingCartIcon, TablePropertiesIcon
} from "lucide-react";

export const navMain = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Meetings",
    url: "#",
    icon: PresentationIcon,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartBarIcon,
  },
  {
    title: "Budgeting",
    url: "#",
    icon: LandmarkIcon,
  },
  {
    title: "Events",
    url: "#",
    icon: CalendarDaysIcon,
  },
  {
    title: "Attendance",
    url: "#",
    icon: FileScanIcon,
  },
  {
    title: "Assets",
    url: "#",
    icon: TablePropertiesIcon,
  },
  {
    title: "Store",
    url: "#",
    icon: ShoppingCartIcon,
  },
]

export const navClouds = [
  {
    title: "Capture",
    icon: CameraIcon,
    isActive: true,
    url: "#",
    items: [
      {
        title: "Active Proposals",
        url: "#",
      },
      {
        title: "Archived",
        url: "#",
      },
    ],
  },
  {
    title: "Proposal",
    icon: FileTextIcon,
    url: "#",
    items: [
      {
        title: "Active Proposals",
        url: "#",
      },
      {
        title: "Archived",
        url: "#",
      },
    ],
  },
  {
    title: "Prompts",
    icon: FileTextIcon,
    url: "#",
    items: [
      {
        title: "Active Proposals",
        url: "#",
      },
      {
        title: "Archived",
        url: "#",
      },
    ],
  },
]

export const navSecondary = [
  {
    title: "Settings",
    url: "#",
    icon: Settings2Icon,
  },
  {
    title: "Get Help",
    url: "#",
    icon: CircleHelpIcon,
  },
  {
    title: "Search",
    url: "#",
    icon: SearchIcon,
  },
]

export const documents = [
  {
    name: "Student Import Template",
    url: "#",
    icon: FileSpreadsheetIcon,
  },
  {
    name: "Header-Footer Template",
    url: "#",
    icon: FileTextIcon,
  },
  {
    name: "Word Assistant",
    url: "#",
    icon: FileIcon,
  },
]