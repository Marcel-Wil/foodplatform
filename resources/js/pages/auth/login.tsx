import Layout from '@/layouts/main-layout';

const Login = () => {
    return (
        <div className="pt-44">
            <div className="mx-auto mb-12 w-full max-w-xl rounded-md bg-[#FAF2DB] p-10 shadow-md">
                <h1 className="mb-6 text-center text-2xl font-bold">LOGIN</h1>

                <form className="space-y-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">Email</label>
                        <input type="email" className="w-full rounded-sm border border-black bg-white px-3 py-2" required />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">Password</label>
                        <input type="password" className="w-full rounded-sm border border-black bg-white px-3 py-2" required />
                        <div className="mt-1 text-sm">
                            <a href="#" className="text-gray-600 underline">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="cursor-pointer rounded-sm border border-black px-5 py-2 font-semibold transition hover:bg-black hover:text-white"
                        >
                            LOG IN
                        </button>
                    </div>
                </form>

                <p className="mt-6 text-center text-sm">
                    Don&apos;t have an account yet?{' '}
                    <a href="register" className="font-medium underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

Login.layout = (page) => <Layout children={page} />;

export default Login;
