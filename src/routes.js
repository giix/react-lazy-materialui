import React from "react";
import { ROUTE_URLS } from "./constants";

export default [
  {
    path: ROUTE_URLS.TICKETS,
    label: "TICKETS",
    component: React.lazy(() => import("./scenes/Ticket/React-Table"))
  },
  {
    path: ROUTE_URLS.NOTES,
    label: "NOTES",
    component: React.lazy(() => import("./scenes/Note"))
  },
  {
    path: ROUTE_URLS.EXAMPLES,
    label: "EXAMPLES",
    component: React.lazy(() => import("./scenes/MatExamples")),
    children: [
      {
        path: ROUTE_URLS.STEPPER,
        label: "Stepper",
        component: React.lazy(() =>
          import("./scenes/MatExamples/scenes/StepperExample")
        )
      },
      {
        path: ROUTE_URLS.MOBILE_STEPPER,
        label: "Mobile Stepper",
        component: React.lazy(() =>
          import("./scenes/MatExamples/scenes/MobileStepperExample")
        )
      }
    ]
  },
  {
    path: ROUTE_URLS.DATA_CAMP,
    label: "DATA CAMP CLONE",
    component: React.lazy(() => import("./scenes/DataCamp"))
  }
];
