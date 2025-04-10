import Layout from '@/layouts/main-layout';

const Register = () => {
    return (
        <div className="pt-50">
            <div className="mx-auto mb-12 w-full max-w-xl rounded-md bg-[#FAF2DB] p-10 shadow-md">
                <h1 className="mb-6 text-center text-2xl font-bold">REGISTER</h1>

                <form className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">Email</label>
                        <input type="email" className="w-full rounded-sm border border-black bg-white px-3 py-2" required />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">Password</label>
                        <input type="password" className="w-full rounded-sm border border-black bg-white px-3 py-2" required />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Confirm Password</label>
                        <input type="password" className="w-full rounded-sm border border-black bg-white px-3 py-2" required />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="cursor-pointer rounded-sm border border-black px-5 py-2 font-semibold transition hover:bg-black hover:text-white"
                        >
                            REGISTER
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-sm">
                    Already have an account?{' '}
                    <a href="login" className="font-medium underline">
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
};

Register.layout = (page) => <Layout children={page} />;

export default Register;
