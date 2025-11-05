"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { toast } from "sonner";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

function Field({
    id,
    label,
    as = "input",
    ...rest
}: {
    id: string;
    label: string;
    as?: "input" | "textarea";
} & React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const Comp: any = as;
    return (
        <div className="space-y-1.5">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-800"
            >
                {label}
            </label>
            <Comp
                id={id}
                name={id}
                className={cx(
                    "w-full rounded-2xl border border-gray-300 px-4 py-3 text-base text-black placeholder:text-gray-400",
                    "outline-none focus:ring-2 focus:ring-black/80"
                )}
                {...rest}
            />
        </div>
    );
}

export default function TrySectionPretty() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const time = formRef.current?.elements.namedItem("time") as HTMLInputElement | null;
        if (time) time.value = new Date().toLocaleString();

        const toastId = toast.loading("Sending your message...");

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                e.currentTarget,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            toast.success("Thank you! We’ve received your information.", {
                id: toastId,
            });
            formRef.current?.reset();
        } catch (err) {
            console.error(err);
            toast.error("Failed to send. Please try again!", { id: toastId });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20 rounded-2xl shadow-2xl bg-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
                <div className="text-center lg:text-left space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl text-black"
                    >
                        Try RAVO
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className="text-xl sm:text-2xl text-gray-700 font-light tracking-wide"
                    >
                        <span className="text-[#956D30] font-medium">The Smart POS</span>{" "}
                        for Modern Nail Salons.
                    </motion.p>
                </div>

                <div>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
                        Learn about new features and hear stories from other nail salons.
                    </h3>

                    <form
                        ref={formRef}
                        onSubmit={onSubmit}
                        className="mt-6 space-y-5"
                    >
                        <input
                            type="hidden"
                            name="time"
                            defaultValue={new Date().toLocaleString()}
                        />

                        <Field
                            id="user_name"
                            label="Name*"
                            placeholder="Your name"
                            required
                        />
                        <Field
                            id="phone_number"
                            label="Your phone number*"
                            placeholder="Your phone number"
                            type="tel"
                            required
                        />
                        <Field
                            id="user_email"
                            label="Your email*"
                            placeholder="Your email address"
                            type="email"
                            required
                        />
                        <Field
                            id="message"
                            label="Message*"
                            placeholder="Enter your message"
                            as="textarea"
                            required
                            rows={4}
                        />

                        <div className="flex justify-center">
                            <button
                                disabled={loading}
                                aria-busy={loading}
                                className={cx(
                                    "rounded-full px-10 py-3 font-medium transition-all duration-300",
                                    "bg-black text-white hover:bg-white hover:text-black border border-black",
                                    "shadow-sm hover:shadow-md active:scale-95 cursor-pointer",
                                    loading && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {loading ? "Sending…" : "Submit"}
                            </button>
                        </div>

                        <p className="text-sm font-serif text-gray-500 text-center">
                            *This information may be transcribed, used, and stored by third
                            parties in accordance with our{" "}
                            <a
                                href="/privacy"
                                className="font-bold underline underline-offset-2 hover:text-black"
                            >
                                Privacy Policy
                            </a>.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
