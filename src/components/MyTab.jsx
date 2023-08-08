import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Education } from "./Education";
export function MyTab() {
  const data = [
    {
      label: "Professionals Skills",
      value: "professional",
      desc: <Skills />,
    },
    {
      label: "Experience",
      value: "experience",
      desc: <Experience />,
    },
    {
      label: "Education",
      value: "education",
      desc: <Education />,
    },
  ];

  return (
    <Tabs value="professional" className="lg:px-3 lg:py-3 text-white" >
      <TabsHeader
        indicatorProps={{
          className: "bg-purple-300 shadow-none  ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-white" >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
