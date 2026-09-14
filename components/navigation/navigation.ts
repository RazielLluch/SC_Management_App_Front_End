import {
  ChartBarIcon, DatabaseIcon, FileChartColumnIcon, FileIcon,
  FolderIcon,
  LayoutDashboardIcon,
  ListIcon, UsersIcon
} from "lucide-react";
import * as React from "react";

export const navigationMain = [
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