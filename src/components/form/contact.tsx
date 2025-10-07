"use client";
import z from "zod";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { services } from "@/constants/service.constant";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { EmailTemplate } from "../template/email-message";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    firstName: z.string().min(2, {
      message: "First Name is required.",
    }),
    lastName: z.string().min(2, {
      message: "Last Name is required.",
    }),
    service: z.string().min(2, {
      message: "Service is required.",
    }),
    email: z.string().email({
      message: "Invalid email address.",
    }),
    phone: z.string().min(10, {
      message: "Phone number is required.",
    }),
    message: z.string().min(1, {
      message: "Message is required.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      service: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const fullname = values.firstName + " " + values.lastName;

    try {
      setIsLoading(true);
      const emailMessage = EmailTemplate({
        name: fullname,
        email: values.email,
        service: values.service,
        phone: values.phone,
        message: values.message,
      });

      await sendEmail({
        email: values.email,
        name: fullname,
        html: emailMessage,
      });

      toast("Email has been sent", {
        description: "We will get back to you as soon as possible",
      });
      form.reset();
    } catch {
      toast("Failed to send email", {
        description: "Please try again",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-background border border-white p-6 sm:p-8 z-20">
      <h3 className="sm:text-2xl text-xl font-semibold text-white mb-6">
        Send Us a Message
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        variant="outline"
                        placeholder="First Name"
                        className="text-sm sm:text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        variant="outline"
                        placeholder="Last Name"
                        className="text-sm sm:text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Needed</FormLabel>
                    <FormControl className="">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="border border-white/40 w-full h-10">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem
                              key={service.title}
                              value={service.title}
                              className="text-sm sm:text-base"
                            >
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        variant="outline"
                        placeholder="Email"
                        className="text-sm sm:text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        variant="outline"
                        className="text-sm sm:text-base"
                        placeholder="Phone Number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        variant="outline"
                        placeholder="Message"
                        className="text-sm sm:text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-6 w-full cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
