import Image from "next/image";
import data from "../data.json";
// import Head from "next/head";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

function LinkCard({
    href,
    title,
    image,
}: {
    href: string;
    title: string;
    image?: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-1 w-full rounded hover:scale-105 mb-4 transition-all bg-gray-100 border border-gray-300 mb-3 max-w-3xl drop-shadow-md"
        >
            <div className="flex text-center w-full">
                {image && (
                    <Image
                        className="rounded-sm"
                        alt={title}
                        src={image}
                        width={40}
                        height={40}
                    />
                )}
                <h2 className="font-semibold w-full text-center">{title}</h2>
            </div>
        </a>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8 ">
            <Image
                className="rounded-full"
                alt={data.name}
                src={data.avatar}
                width={100}
                height={100}
            />
            <h1 className="font-bold mt-4 text-xl mb-8">{data.name}</h1>
            {data.links.map((link) => (
                <LinkCard key={link.href} {...link} />
            ))}
        </div>
    );
}
