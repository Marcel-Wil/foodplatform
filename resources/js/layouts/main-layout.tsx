import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <article>{children}</article>
            <Footer />
        </main>
    );
}
