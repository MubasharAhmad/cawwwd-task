import { FaCrown, FaCheck } from "react-icons/fa";
import React from "react";

interface FilterItem {
  name: string;
  childs: Array<{
    name: string;
    icon?: { element: JSX.Element; color: string };
    isChecked: boolean;
  }>;
}

export const filters: FilterItem[] = [
  {
    name: "Supliers Types",
    childs: [
      {
        icon: {
          element: React.createElement(FaCrown),
          color: "text-orange-500",
        },
        name: "Trade Assurance",
        isChecked: false,
      },
      {
        icon: {
          element: React.createElement(FaCheck),
          color: "text-blue-500",
        },
        name: "Verified Suppliers",
        isChecked: false,
      },
    ],
  },
  {
    name: "product Types",
    childs: [
      {
        name: "Ready to Ship",
        isChecked: true,
      },
      {
        name: "Paid Samples",
        isChecked: true,
      },
    ],
  },
  {
    name: "Condition",
    childs: [
      {
        name: "New Stuff",
        isChecked: false,
      },
      {
        name: "Second Hand",
        isChecked: false,
      },
    ],
  },
];
