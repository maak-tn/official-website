import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "MAAK CORP",
    description: "Affordable SAAS for small abd medium businesses",
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: dark)',
                url: '/logo_white.png',
            },
            {
                media: '(prefers-color-scheme: light)',
                url: '/logo_dark.png',
            },
        ],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
