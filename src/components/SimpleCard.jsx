import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";
export const SimpleCard = ({ title, subtitle, image }) => {
  return (
    <>
      <Card className="mt-6 w-96">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="relative h-56"
        >
          <img
            h-full
            w-full
            object-cover
            src={image}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others.
          </Typography>
        </CardBody>
      </Card>
    </>
  );
};
