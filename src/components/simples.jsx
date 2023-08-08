import React from "react";
import {
  Typography,
  Card,
  Button,
  IconButton,
  Navbar,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import { SimpleCard } from "./components/SimpleCard";
import { MyTab } from "./components/MyTab";
import { Networks } from "./components/Networks";
import { Portfolio } from "./components/Portfolio";
export default function App() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Portfolio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Resume
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="relative grid min-h-[100vh] ">
      <Navbar className="bg-deep-purple-200 sticky top-0 z-10  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <Avatar src="/img/andrea.jpg" alt="avatar" />
            <div>
              <Typography variant="h6"> Andrea Pérez</Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Software Engineer
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Contact</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse>
      </Navbar>

      <div className="ml-auto mr-auto px-4 w-full container pt-8 sm:pt-14 grid grid-cols-3 gap-4">
        <div div className="col-span-3 lg:col-span-2 ">
          <Typography variant="h1" color="deep-purple">
            Hello, I'm Andrea Pérez
          </Typography>
          <Typography variant="lead" color="blue-gray" className="opacity-70">
            I'm a Software Engineer, focused on Frontend development with +3
            years of experience. I have developed and maintained responsive web
            applications using Vue.js, TypeScript, React.js, Next.js. I
            characterize myself for being committed and focused on technical
            growth. I am constantly learning, self-taught. In favor of always
            improving the performance and efficiency of the product by applying
            the best practices. I would love to work on projects where I can
            make the most out of my knowledge.
          </Typography>
          <Networks />
        </div>

        <div className="py-3">
          <img
            className="h-96 w-96 rounded-full object-cover object-center"
            src="/img/andrea.jpg"
            alt="nature image"
          />
        </div>
      </div>

      <div className="lg:py-7 flex-row text-center">
        <Typography variant="h1" color="deep-purple">
          My Portfolio
        </Typography>
      </div>

      <div className=" py-5 lg:px-5 grid grid-cols-1 gap-4 self-end md:grid-cols-2 lg:grid-cols-3">
        <Portfolio title={"CLM digital solutions"} image={"/img/clm.png"} />
        <Portfolio title={"Begentos"} image={"/img/begento1.png"} />
        <Portfolio title={"Incresc"} image={"/img/incresc2.png"} />
        <Portfolio title={"Shopping Cart"} image={"/img/cart1.png"} />
        <Portfolio title={"Hacker News"} image={"/img/news1.png"} />
        <Portfolio title={"Patient Manager"} image={"/img/paciente.png"} />
        <a href="https://clmds.com/" target="_blank" rel="noreferrer">
          <SimpleCard title={"CLM digital solutions"} image={"/img/clm.png"} />
        </a>

        <a
          href="http://v100.beos.begento.com/#/"
          target="_blank"
          rel="noreferrer"
        >
          <SimpleCard title={"Begentos"} image={"/img/begento1.png"} />
        </a>
        <a href="https://incresc.com/" target="_blank" rel="noreferrer">
          <SimpleCard title={"Incresc"} image={"/img/incresc1.png"} />
        </a>
        <a
          href="https://vercel.com/avpm96/shoppingcart"
          target="_blank"
          rel="noreferrer"
        >
          <SimpleCard title={"Shopping Cart"} image={"/img/cart1.png"} />
        </a>
        <a
          href="https://capable-fairy-5864b0.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <SimpleCard title={"Hacker news"} image={"/img/news1.png"} />
        </a>
        <a
          href="https://elated-liskov-47f1d8.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <SimpleCard title={"Patient manager"} image={"/img/paciente.png"} />
        </a>
      </div>
      <div className="py-7 flex-row text-center">
        <Typography variant="h1" color="deep-purple">
          Resume
        </Typography>
      </div>
      <MyTab />
    </div>
  );
}
