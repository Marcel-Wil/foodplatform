import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Layout({ children }) {
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
