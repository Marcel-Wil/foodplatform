import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Layout from '@/layouts/main-layout';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, ReactNode } from 'react';

const Login = () => {
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="pt-44">
            <div className="mx-auto mb-12 w-full max-w-xl rounded-md bg-[#f2da9c] p-10 shadow-md">
                <h1 className="mb-6 text-center text-2xl font-bold">LOGIN</h1>

                <form className="space-y-4" onSubmit={submit}>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-sm border border-black bg-white px-3 py-2"
                            required
                            onChange={(e) => setData('email', e.target.value)}
                            value={data.email}
                        />
                        {errors.email && <div className="text-red-600">{errors.email}</div>}
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="w-full rounded-sm border border-black bg-white px-3 py-2"
                            required
                            onChange={(e) => setData('password', e.target.value)}
                            value={data.password}
                        />
                        {errors.password && <div className="text-red-600">{errors.password}</div>}

                        <div className="mt-4 flex items-center space-x-3">
                            <Checkbox
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onClick={() => setData('remember', !data.remember)}
                                tabIndex={3}
                            />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <div className="mt-1 text-sm">
                            <a href="forgot-password" className="text-gray-600 underline">
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

Login.layout = (page: ReactNode) => <Layout children={page} />;

export default Login;
