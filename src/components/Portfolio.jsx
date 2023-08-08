import { Typography } from "@material-tailwind/react";

export const Portfolio = ({ title, image, refe }) => {
  return (
    <figure className="relative  py-4 px-5 shadow-xl shadow-transparent transition-all hover:-translate-y-4 hover:border-blue-gray-100/60 hover:shadow-blue-gray-900/5">
      <a href={refe} target="_blank" rel="noreferrer">
        <img
          className="h-full w-full  rounded-xl object-cover object-center"
          src={image}
          alt="nature image"
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-black bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
          <div>
            <Typography variant="h5" color="blue-gray">
              {title}
            </Typography>
          </div>
        </figcaption>
      </a>
    </figure>
  );
};
