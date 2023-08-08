import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function Experience() {
  return (
    <div className="">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" className="leading-none text-cyan-100">
              Intern in Inter.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography className="text-cyan-100">2019</Typography>
            <Typography
              variant="h5"
              color="white"
              className="font-normal text-white"
            >
              Period of professionals practices. Development of applications for
              Devices with Genexus, dedicated to migrating information in c#
              language to java
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" className="leading-none text-cyan-100">
              Frontend Developer in INCRESC
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography className="text-cyan-100">
              January 2021 - August 2021
            </Typography>
            <Typography variant="h5" className="font-normal text-white">
              Responsible for the front end in a web application for a company
              dedicated to the community of musicians, which was developed using
              Vuejs ,Nuxt, vuetify, TypeScript and PUG.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" className="leading-none text-cyan-100">
              Frontend Developer in Cipher Medical
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography className="text-cyan-100">
              November 2021 - February 2023
            </Typography>
            <Typography variant="h5" className="font-normal text-white">
              Web application medical for hospitals which were developed using
              Vuejs-2, Vuex ,Vue Router, Vuetify and JavaScript language.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" className="leading-none text-cyan-100">
              Frontend Developer in CLM Digital Solutions
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography className="font-normal text-cyan-100">
              November 2022 - Abril 2023
            </Typography>
            <Typography variant="h5" className="font-normal text-white">
              Web application for the company CLM digital solutions , Landing
              Page, users Management integrated, which were developed using
              nextjs, reactjs, material-ui and Firebase
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
