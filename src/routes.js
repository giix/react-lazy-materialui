import React from "react";

export default [
  {
    path: "/tickets",
    label: "TICKETS",
    component: React.lazy(() => import("./scenes/Ticket/React-Table"))
  },
  {
    path: "/notes",
    label: "NOTES",
    component: React.lazy(() => import("./scenes/Note"))
  },
  {
    path: "/examples",
    label: "EXAMPLES",
    component: React.lazy(() => import("./scenes/MatExamples")),
    children: [
      {
        path: "stepper",
        label: "Stepper",
        component: React.lazy(() =>
          import("./scenes/MatExamples/scenes/StepperExample")
        )
      }
    ]
  }
];
