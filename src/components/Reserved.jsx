import { Avatar,Typography } from "@material-tailwind/react";
export function Reserved() {
  return (
    <div className="py-8 flex justify-center ... text-center">
      <div className="">
        <Avatar src="/img/andrea.jpg" alt="avatar" size="xxl" />
        <Typography variant="h5" color="white">
          Andrea Pérez
        </Typography>
        <Typography variant="small" color="white">
        © 2023. All rights reserved by Andrea Pérez
        </Typography>
      </div>
    </div>
  );
}
