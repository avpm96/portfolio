import { IconButton, Typography } from "@material-tailwind/react";

export function Networks() {
  return (
    <>
      <div className="py-5">
        <Typography variant="h4" color="white">
          Professional Networks
        </Typography>
      </div>
      <div className="flex gap-4 pa-6">
        <a
          href="https://www.linkedin.com/in/andrea-valentina-perez/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            size="lg"
            className="rounded bg-[#0d52c9] hover:shadow-[white]/20 focus:shadow-[white]/20 active:shadow-[white]/10"
          >
            <i className="fab fa-linkedin text-lg" />
          </IconButton>
        </a>
        <a
          href="https://github.com/avpm96"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton
            size="lg"
            className="rounded bg-[#333333] hover:shadow-[white]/20 focus:shadow-[white]/20 active:shadow-[white]/10"
          >
            <i className="fab fa-github text-lg" />
          </IconButton>
        </a>
      </div>
    </>
  );
}
