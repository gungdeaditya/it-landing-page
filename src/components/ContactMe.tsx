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
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>({
        defaultValues: {
            projectType: "Website"
        }
    });

    const sendEmail = async () => {
        if (!form.current) return;
        try {
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID || "public_id"
            );
            reset();
            console.log(result.text);
        } catch (error: any) {
            console.log(error.text);
            throw new Error(error.text);
        }
    };

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        toast.promise(sendEmail(), {
            loading: "Sending message, please wait...",
            success: "Message successfully sent!",
            error: "Oops, there was an error sending your message.",
        });
    };

    const inputClasses =
        "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow";

    const labelClasses = "block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2";

    return (
        <main className="min-h-screen grid place-items-center py-32 px-4">
            <div className="w-full max-w-4xl bg-card border border-border shadow-lg rounded-2xl p-8 md:p-12">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Send me a message!
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Got a question, proposal, or just want to say hello? Go ahead.
                    </p>
                </div>

                <form
                    ref={form}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className={labelClasses}>
                                Name <span className="text-destructive">*</span>
                            </label>
                            <input
                                id="name"
                                {...register("name", { required: true })}
                                className={twMerge(inputClasses, errors.name && "border-destructive focus-visible:ring-destructive")}
                                placeholder="John Doe"
                            />
                            {errors.name && <span className="text-destructive text-xs">This field is required</span>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className={labelClasses}>
                                Email <span className="text-destructive">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                className={twMerge(inputClasses, errors.email && "border-destructive focus-visible:ring-destructive")}
                                placeholder="john@example.com"
                            />
                            {errors.email && <span className="text-destructive text-xs">Valid email is required</span>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className={labelClasses}>
                                Phone
                            </label>
                            <input
                                id="phone"
                                {...register("phone")}
                                className={inputClasses}
                                placeholder="+62 812 3456 7890"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="projectType" className={labelClasses}>
                                Type of Project
                            </label>
                            <Controller
                                name="projectType"
                                control={control}
                                render={({ field }) => (
                                    <select
                                        {...field}
                                        className={inputClasses}
                                    >
                                        <option value="Website">Website</option>
                                        <option value="Mobile">Mobile Application</option>
                                        <option value="Both">Both (Fullstack & Mobile)</option>
                                        <option value="Other">Other Consulting</option>
                                    </select>
                                )}
                            />
                        </div>

                        <div className="md:col-span-2 space-y-2">
                            <label htmlFor="notes" className={labelClasses}>
                                Additional Details <span className="text-destructive">*</span>
                            </label>
                            <textarea
                                id="notes"
                                {...register("notes", { required: true })}
                                className={twMerge(inputClasses, "min-h-[150px] resize-y", errors.notes && "border-destructive focus-visible:ring-destructive")}
                                placeholder="Hi, I think we need to develop a web/app for our products. How soon can we hop on a call to discuss this?"
                            />
                            {errors.notes && <span className="text-destructive text-xs">Please provide some details for your inquiry</span>}
                        </div>
                    </div>

                    <div className="flex justify-center pt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-12 uppercase tracking-wider"
                        >
                            {isSubmitting ? "Sending..." : "Submit Message"}
                        </button>
                    </div>
                </form>
            </div>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: 'hsl(var(--card))',
                        color: 'hsl(var(--card-foreground))',
                        border: '1px solid hsl(var(--border))',
                    },
                }}
            />
        </main>
    );
}
