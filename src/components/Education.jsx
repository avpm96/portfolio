import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function Education() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <Timeline className="lg:pl-6">
        <Typography variant="h4" className="py-2 text-cyan-100">
          2015-2019
        </Typography>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" className="leading-none text-cyan-100">
              Modern languages, basic english.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 text-cyan-100">
            <Typography>2015</Typography>
            <Typography
              variant="small"
           
              className="font-normal text-white"
            >
              University of Carabobo, FUNDAUC
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" className="leading-none text-cyan-100">
              Intermediate English
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 text-cyan-100">
            <Typography>2018</Typography>
            <Typography
              variant="small"
             
              className="font-normal text-white"
            >
              Open English
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography
              variant="h5"
              color="blue-gray"
              className="leading-none text-cyan-100"
            >
              CCNA routing and swithing
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 text-cyan-100">
            <Typography>2019</Typography>
            <Typography
              variant="small"
         
              className="font-normal text-white"
            >
              Cisco Networking academy
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
      <Timeline>
        <Typography variant="h4" className="py-5 text-cyan-100">
          2020-2022
        </Typography>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" className="leading-none text-cyan-100">
              CSS The Complete Guide - Flexbox, CSS Grid, SASS
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 text-cyan-100">
            <Typography>2020</Typography>
            <Typography
              variant="small"
              
              className="font-normal text-white"
            >
              Udemy
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" className="leading-none text-cyan-100">
              Quasar V1: Cross-Platform Apps (with Vue 2, Vuex & Firebase)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 text-cyan-100">
            <Typography>2021</Typography>
            <Typography variant="small" className="font-normal text-white">
              Udemy
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5"  className="leading-none text-cyan-100">
              Software Engineering
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8 text-cyan-100">
            <Typography>2022</Typography>
            <Typography
              variant="small"
           
              className="font-normal text-white"
            >
              Lisandro Alvarado Central-Western University
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5"  className="leading-none text-cyan-100">
              React course: From zero to expert ( Hooks and MERN )
            </Typography>
          </TimelineHeader>
          <TimelineBody className="text-cyan-100">
            <Typography>2022</Typography>
            <Typography
              variant="small"
           
              className="font-normal text-white"
            >
              Udemy
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
