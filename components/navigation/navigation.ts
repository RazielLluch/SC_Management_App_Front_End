import {
  CameraIcon,
  ChartBarIcon, CircleHelpIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, FileTextIcon,
  FolderIcon,
  LayoutDashboardIcon,
  ListIcon, SearchIcon, Settings2Icon, UsersIcon
} from "lucide-react";
import * as React from "react";

export const navMain = [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: ListIcon,
    },
    {
      title: "Analytics",
      url: "#",
      icon: ChartBarIcon,
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderIcon,
    },
    {
      title: "Team",
      url: "#",
      icon: UsersIcon,
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
    name: "Data Library",
    url: "#",
    icon: DatabaseIcon,
  },
  {
    name: "Reports",
    url: "#",
    icon: FileChartColumnIcon,
  },
  {
    name: "Word Assistant",
    url: "#",
    icon: FileIcon,
  },
]