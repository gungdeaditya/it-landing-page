import React, { type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLDivElement> & {
    sizesClassname?: string;
    caption?: string;
    src: string;
    alt: string;
};

const ImageHoverEffect = ({
    className,
    sizesClassname,
    caption,
    src,
    alt,
}: Props) => {
    return (
        <div
            className={twMerge(
                "group relative overflow-hidden rounded-xl shadow-md cursor-pointer",
                className,
                sizesClassname
            )}
        >
            <img
                src={src}
                alt={alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <p className="text-white text-lg font-medium mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{caption}</p>
                <button
                    type="button"
                    className="text-primary-foreground bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/30 font-medium rounded-full text-sm px-6 py-2.5 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150"
                >
                    Visit Site
                </button>
            </div>
        </div>
    );
};

export default ImageHoverEffect;
