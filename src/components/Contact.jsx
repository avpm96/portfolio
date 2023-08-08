import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Here is your toast.");
export const Contact = () => {
  const form = useRef();
  const [loadingState, setLoadingState] = useState(false);

  const [errorState, setErrorState] = useState(false);

  const [successState, setSuccessState] = useState(false);
  const [formValues, handleInputChange, reset] = useForm({
    contactname: "",
    contactnumber: "",
    contactemail: "",
    contactsubject: "",
    contactmessage: "",
  });
  const {
    contactname,
    contactnumber,
    contactemail,
    contactsubject,
    contactmessage,
  } = formValues;

  const handleSend = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: contactname,
      from_phone: contactnumber,
      from_email: contactemail,
      from_subject: contactsubject,
      message: contactmessage,
    };

    emailjs
      .send(
        "service_79mxzgc",
        "template_9jaueks",
        templateParams,
        "QojbwI0UOULmriMTv"
      )

      .then(
        (response) => {
          if (response.status === 200) {
            toast.success("message sent to Andrea successfully!");
            console.log("enviado");
            reset();
            setTimeout(() => {
              setSuccessState(false);
            }, 3000);
          } else {
            toast.error("This didn't work.");
          }
        },
        (err) => {
          toast.error("This didn't work.");
        }
      );
  };

  return (
    <>
      <div  className="py-10 flex justify-center">
        <form  onSubmit={handleSend}>
          <Card>
            <CardHeader
              variant="gradient"
              color="purple"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Contact Me
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4 my-4">
              <div className="flex  items-center gap-4 ">
                <Input
                  name="contactname"
                  id="contactname"
                  label="Your Name"
                  size="lg"
                  color="purple"
                  type="text"
                  value={contactname}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="contactnumber"
                  id="contactnumber"
                  type="text"
                  label="Phone Number"
                  size="lg"
                  color="purple"
                  value={contactnumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Input
                name="contactemail"
                id="contactemail"
                type="text"
                label="Email"
                size="lg"
                color="purple"
                value={contactemail}
                onChange={handleInputChange}
                required
              />
              <Input
                name="contactsubject"
                id="contactsubject"
                type="text"
                label="Subject"
                size="lg"
                color="purple"
                value={contactsubject}
                onChange={handleInputChange}
                required
              />
              <Textarea
                name="contactmessage"
                id="contactmessage"
                type="text"
                label="Your Message"
                size="lg"
                color="purple"
                value={contactmessage}
                onChange={handleInputChange}
                required
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth color="purple">
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </form>

        <Toaster />
        
      </div>
    </>
  );
};
