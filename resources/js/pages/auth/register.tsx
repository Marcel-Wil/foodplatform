import Layout from '@/layouts/main-layout';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, ReactNode } from 'react';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <div className="pt-44">
            <div className="mx-auto mb-12 w-full max-w-xl rounded-md bg-[#f2da9c] p-10 shadow-md">
                <h1 className="mb-6 text-center text-2xl font-bold">REGISTER</h1>

                <form className="space-y-4" onSubmit={submit}>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            className="w-full rounded-sm border border-black bg-white px-3 py-2"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        {errors.name && <div className="text-red-600">{errors.name}</div>}
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-sm border border-black bg-white px-3 py-2"
                            onChange={(e) => setData('email', e.target.value)}
                            value={data.email}
                            required
                        />
                        {errors.email && <div className="text-red-600">{errors.email}</div>}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full rounded-sm border border-black bg-white px-3 py-2"
                            onChange={(e) => setData('password', e.target.value)}
                            value={data.password}
                            required
                        />
                        {errors.password && <div className="text-red-600">{errors.password}</div>}
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full rounded-sm border border-black bg-white px-3 py-2"
                            required
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            value={data.password_confirmation}
                        />
                        {errors.password_confirmation && <div className="text-red-600">{errors.password_confirmation}</div>}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="cursor-pointer rounded-sm border border-black px-5 py-2 font-semibold transition hover:bg-black hover:text-white"
                            disabled={processing}
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

Register.layout = (page: ReactNode) => <Layout children={page} />;

export default Register;
