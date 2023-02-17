import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <title>Kevin Nielsen Linktree Clone Next.js</title>
            <meta
                name="description"
                content="This is a Linktree Clone.  The project was built by Kevin Nielsen in next.js using tailwindcss."
            />
            <body className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
