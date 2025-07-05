"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MaxWidthWrapper from "./MaxWidthWrapper";
import FormInput from "./FormItem";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Form } from "@/components/ui/form";
import { TypographyH1 } from "./TypoGraphy";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { EMAIL, PHONE, PUBLI_KEY, ServiceId, Template } from "../constants";
import ListArray from "./ListArray";

const messageSchema = z.object({
  from_name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Phone number is required"),
  message: z.string().nonempty("Message is required"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });

  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (data: z.infer<typeof messageSchema>) => {
    setPending(true);
    setSuccess(false);
    setError(false);

    emailjs.send(ServiceId, Template, data, PUBLI_KEY).then(
      (result) => {
        setSuccess(true);
        setPending(false);
        form.reset();
      },
      (err) => {
        setError(true);
        setPending(false);
      }
    );
  };

  return (
    <div
      id="contact"
      className="bg-gray-50 text-black dark:bg-black dark:text-white min-h-screen flex flex-col justify-between"
    >
      <MaxWidthWrapper className="mx-auto py-16">
        <TypographyH1 className="text-4xl max-w-xl font-bold mb-4 text-black dark:text-white">
          GET IN TOUCH WITH ME
        </TypographyH1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          FILL OUT THE FORM AND WE'LL CONTACT YOU
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-5">
              <FormInput name="from_name">
                <Input
                  type="text"
                  placeholder="Your name"
                  aria-label="Your name"
                  {...form.register("from_name")}
                  className="w-full bg-gray-100 dark:bg-black text-black dark:text-white border-gray-300 dark:border-white"
                />
              </FormInput>
              <FormInput name="email">
                <Input
                  type="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  {...form.register("email")}
                  className="w-full bg-gray-100 dark:bg-black text-black dark:text-white border-gray-300 dark:border-white"
                />
              </FormInput>
            </div>
            <FormInput name="phone">
              <Input
                type="text"
                placeholder="Your phone number"
                aria-label="Your phone number"
                {...form.register("phone")}
                className="w-full bg-gray-100 dark:bg-black text-black dark:text-white border-gray-300 dark:border-white"
              />
            </FormInput>
            <FormInput name="message">
              <Textarea
                placeholder="Your message"
                aria-label="Your message"
                {...form.register("message")}
                className="w-full bg-gray-100 dark:bg-black text-black dark:text-white border-gray-300 dark:border-white"
                rows={5}
              />
            </FormInput>
            <Button
              type="submit"
              className="bg-black text-white dark:bg-white dark:text-black py-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition border border-black dark:border-white"
              disabled={pending}
            >
              {pending ? "Sending..." : "SEND OUT"}
            </Button>

            {success && (
              <p
                role="alert"
                className="text-green-600 dark:text-green-400 mt-4"
              >
                Your message has been sent successfully!
              </p>
            )}
            {error && (
              <p role="alert" className="text-red-600 dark:text-red-400 mt-4">
                There was an error sending your message. Please try again.
              </p>
            )}
          </form>
        </Form>
      </MaxWidthWrapper>

      <footer className="bg-gray-100 dark:bg-black text-black dark:text-white py-8 border-t border-gray-300 dark:border-gray-700">
        <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <div className="flex flex-col">
              <a
                href={`mailto:${EMAIL}`}
                className="flex hover:text-main duration-150 items-center gap-2 text-black dark:text-white hover:underline"
                aria-label={`Send email to ${EMAIL}`}
              >
                <FaMailBulk className="w-4 h-4" />
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex hover:text-main duration-150 items-center gap-2 text-black dark:text-white hover:underline"
                aria-label={`Call phone number ${PHONE}`}
              >
                <FaPhone className="w-4 h-4" />
                {PHONE}
              </a>
            </div>
          </div>
          <ListArray
            heading="ABOUT ME"
            items={["Main", "Projects", "Portfolio", "About us", "Contact us", "News"]}
          />
          <ListArray
            heading="Services"
            items={["Main", "Projects", "Portfolio", "About us", "Contact us", "News"]}
          />
          <div>
            <p>©2025 All rights reserved. Ziad</p>
            <p>Developed by the Me</p>
          </div>
        </MaxWidthWrapper>
      </footer>
    </div>
  );
}
