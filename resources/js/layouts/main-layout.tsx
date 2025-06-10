import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { type PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow">
                <article>{children}</article>
            </main>

            <Footer />
        </div>
    );
}
