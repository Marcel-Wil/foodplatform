import Layout from '@/layouts/main-layout';
import { SharedData } from '@/types';
import { router, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, ReactNode, useState } from 'react';

const Profile = () => {
    const { auth } = usePage<SharedData>().props;
    const [userEmail, setUserEmail] = useState(auth.user.email);
    const [succesfullChangePsswd, setSuccesfullChangePsswd] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
        remember: false,
    });

    const reset = () => {
        setData('current_password', '');
        setData('password', '');
        setData('password_confirmation', '');
        setData('remember', false);
        setSuccesfullChangePsswd(true);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put('password', {
            onSuccess: () => reset(),
        });
    };

    const changeEmail = () => {
        router.visit('/settings/profile', {
            method: 'patch',
            data: {
                email: userEmail,
            },
        });
    };

    return (
        <div className="mt-12 flex flex-col items-center font-bold">
            {/* Navigation Tabs */}
            <div className="mb-8 flex w-full space-x-6 rounded-md bg-[#FFF9EA] p-4 font-semibold text-gray-700">
                <a href="/settings/profile" className="text-yellow-700 underline">
                    Profile Settings
                </a>
                <a href="/settings/orders" className="hover:underline">
                    My Orders
                </a>
            </div>

            {/* Settings Container */}
            <div className="mb-10 w-full max-w-3xl rounded-md border border-yellow-300 bg-[#f9f1de] p-10 shadow-md">
                <h1 className="mb-10 text-center text-4xl font-bold">My Settings</h1>

                <div className="space-y-10">
                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-800">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-md border border-gray-400 px-4 py-2 text-gray-900 focus:outline-yellow-600"
                            required
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />

                        <button
                            className="mt-2 cursor-pointer rounded-md border border-black bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                            onClick={changeEmail}
                        >
                            Change Email
                        </button>
                    </div>
                    <form onSubmit={submit}>
                        {/*Current Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-800">Current Passowrd</label>
                            <input
                                type="password"
                                className="w-full rounded-md border border-gray-400 px-4 py-2 text-gray-900 focus:outline-yellow-600"
                                required
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                            />
                            {errors.current_password && <div className="text-red-600">{errors.current_password}</div>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-800">New Password</label>
                            <input
                                type="password"
                                className="w-full rounded-md border border-gray-400 px-4 py-2 text-gray-900 focus:outline-yellow-600"
                                required
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            {errors.password && <div className="text-red-600">{errors.password}</div>}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-800">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full rounded-md border border-gray-400 px-4 py-2 text-gray-900 focus:outline-yellow-600"
                                required
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            {errors.password_confirmation && <div className="text-red-600">{errors.password_confirmation}</div>}
                            <button
                                className="mt-2 cursor-pointer rounded-md border border-black bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                type="submit"
                                disabled={processing}
                            >
                                Change Password
                            </button>
                            {succesfullChangePsswd && <div className="text-green-600">Succesfully changed the password</div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Profile.layout = (page: ReactNode) => <Layout children={page} />;

export default Profile;
