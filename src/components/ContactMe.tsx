import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";

type FormValues = {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    notes: string;
};

export default function ContactMe() {
    const form = useRef<HTMLFormElement>(null);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>();

    const sendEmail = () => {
        return emailjs
            .sendForm(
                (import.meta.env.PUBLIC_EMAILJS_SERVICE_ID as string) || "service_id",
                (import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID as string) || "template_id",
                form.current!,
                (import.meta.env.PUBLIC_EMAILJS_PUBLIC_ID as string) || "public_id"
            )
            .then(
                (result) => {
                    reset();
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        toast.promise(sendEmail(), {
            loading: "Send first, please wait...",
            success: "Message successfully send!",
            error: "Opps, there was an error!",
        });
    };

    const inputClassNames = "w-full border-b-[1px] border-b-gray-400 bg-transparent py-2 focus:outline-none focus:border-b-primary-500 transition-colors dark:text-gray-200";
    const labelClassNames = "text-sm text-gray-500 dark:text-[#90a4ae] mb-1 font-semibold block";

    return (
        <main className="min-h-screen grid place-items-center py-[20vh] mt-16">
            <form
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-screen-xl 2xl:w-5/12 flex flex-col space-y-4 items-center px-8 lg:px-0"
            >
                <h1 className="text-3xl 2xl:text-5xl font-bold text-center">
                    Send me a message!
                </h1>
                <h2 className="text-center text-[#757575] dark:text-gray-400">
                    Got a question or proposal, or just want to say hello? Go ahead.
                </h2>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 pt-20">

                    <div className="relative w-full min-w-[200px]">
                        <label className={labelClassNames}>Name</label>
                        <input
                            {...register("name", { required: true })}
                            className={inputClassNames}
                            required
                        />
                    </div>

                    <div className="relative w-full min-w-[200px]">
                        <label className={labelClassNames}>Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className={inputClassNames}
                            required
                        />
                    </div>

                    <div className="relative w-full min-w-[200px]">
                        <label className={labelClassNames}>Phone</label>
                        <input
                            {...register("phone")}
                            className={inputClassNames}
                            placeholder="example: (+62) xxx xxxx"
                        />
                    </div>

                    <div className="relative w-full min-w-[200px]">
                        <label className={labelClassNames}>Type of Project</label>
                        <Controller
                            name="projectType"
                            control={control}
                            render={({ field }) => (
                                <select
                                    {...field}
                                    className={inputClassNames}
                                >
                                    <option value="Website" className="dark:bg-dark">Website</option>
                                    <option value="Mobile" className="dark:bg-dark">Mobile</option>
                                    <option value="Both" className="dark:bg-dark">Both</option>
                                </select>
                            )}
                        />
                    </div>

                    <div className="lg:col-span-2 relative w-full min-w-[200px]">
                        <label className={labelClassNames}>Additional Details</label>
                        <textarea
                            {...register("notes", { required: true })}
                            required
                            rows={4}
                            className={twMerge(inputClassNames, "resize-y")}
                            placeholder="Hi, I think we need to develop some web/app for our products at Company X. How soon can you hop on to discuss this?"
                        />
                    </div>

                </div>
                <button
                    type="submit"
                    className="transition-all mt-10 w-40 text-gray-900 border border-gray-800 hover:bg-gray-900 hover:text-white dark:text-gray-100 dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-3 text-center"
                >
                    Submit
                </button>
            </form>
            <Toaster />
        </main>
    );
}
