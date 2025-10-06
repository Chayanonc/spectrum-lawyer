"use client";
import z from "zod";
import { Checkbox } from "../ui/checkbox";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { services } from "@/constants/service.constant";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const ContactForm = () => {
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
    message: z.string().min(10, {
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className=" border border-white p-6 sm:p-8">
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
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="border border-white/40 w-full">
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
          <Button type="submit" className="mt-6 w-full">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};
