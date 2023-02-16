import Image from "next/image";
import data from "../data.json";
// import Head from "next/head";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
// const inter = Inter({ subsets: ["latin"] });

function LinkedInIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            fill=""
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
        >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
        >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            fill="currentColor"
            className="bi bi-youtube"
            viewBox="0 0 16 16"
        >
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="24"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
        >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
    );
}

function LinkTreeIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24"
            fill="currentColor"
            className="bi bi-tree"
            viewBox="0 0 16 16"
        >
            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z" />
        </svg>
    );
}

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
            className="flex items-center p-1 w-full rounded hover:scale-105 mb-4 transition-all bg-gray-100 border border-gray-300 mb-3 max-w-3xl min-w-[300px] drop-shadow-md"
        >
            <div className="flex text-center w-full">
                <div className="flex items-center w-10 h-11">
                    {image && (
                        <Image
                            className="rounded-sm"
                            alt={title}
                            src={image}
                            width={40}
                            height={40}
                        />
                    )}
                </div>
                <h2 className="flex justify-center items-center font-semibold w-full -ml-10">
                    {title}
                </h2>
            </div>
        </a>
    );
}

interface Data {
    name: string;
    avatar: string;
    links: Link[];
    socials: Social[];
}

interface Link {
    href: string;
    title: string;
    image?: string;
}

interface Social {
    href: string;
    title: string;
}

export default function Home() {
    // const data: Data | undefined = await get('linktree');

    return (
        <div className="flex flex-col items-center justify-center mx-auto w-full mt-16 px-8 ">
            <Image
                priority
                className="rounded-full"
                alt={data.name}
                src={data.avatar}
                width={100}
                height={100}
            />
            <h1 className="font-bold mt-4 text-xl mb-8">@{data.name}</h1>
            {data.links.map((link) => (
                <LinkCard key={link.href} {...link} />
            ))}

            <div className="flex items-center gap-4 mt-6">
                {data.socials.map((social) => (
                    <a
                        className="hover:scale-110"
                        aria-label={`${social.title} link`}
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.href.includes("linkedin") ? (
                            <LinkedInIcon />
                        ) : social.href.includes("github") ? (
                            <GitHubIcon />
                        ) : social.href.includes("youtube") ? (
                            <YouTubeIcon />
                        ) : social.href.includes("instagram") ? (
                            <InstagramIcon />
                        ) : null}
                    </a>
                ))}
            </div>
            <h1 className="flex text-xl mt-6">
                <div>Linktree</div> <LinkTreeIcon />
                <div className="ml-1">Clone</div>
            </h1>
            <p className="mt-2 text-sm">Built with Next.js</p>
        </div>
    );
}
