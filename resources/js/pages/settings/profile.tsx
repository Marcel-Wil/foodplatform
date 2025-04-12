import Layout from '@/layouts/main-layout';
import { usePage } from '@inertiajs/react';

const profile = () => {
    const { auth } = usePage().props;
    return (
        <div className="mt-13 flex flex-col font-bold">
            <div className="flex space-x-14 bg-[#FFF9EA] md:pl-84">
                <a href="/settings/profile" className="underline">
                    Profile Settings
                </a>
                <a href="/settings/orders">My orders</a>
            </div>
            <div className="mx-auto mt-20 flex min-w-7xl flex-col border bg-[#f9f1de]">
                <h1 className="text-center text-4xl font-bold">My Settings</h1>
                <div className="mx-auto my-10 mt-8 w-1/2 space-y-8">
                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 block text-sm font-medium">e-mail</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                className="w-full rounded-sm border border-black bg-white px-3 py-2"
                                required
                                placeholder={auth.user.email}
                            />
                            <button className="rounded-sm border border-black bg-gray-100 px-3 py-2 text-sm hover:cursor-pointer hover:bg-gray-200">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="mb-1 block text-sm font-medium">Password</label>
                        <div className="flex items-center gap-2">
                            <input type="password" className="w-[87%] rounded-sm border border-black bg-white px-3 py-2" required />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col">
                        <label className="mb-1 block text-sm font-medium">Confirm Password</label>
                        <div className="flex items-center gap-2">
                            <input type="password" className="w-full rounded-sm border border-black bg-white px-3 py-2" required />
                            <button className="rounded-sm border border-black bg-gray-100 px-3 py-2 text-sm hover:cursor-pointer hover:bg-gray-200">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                        <label className="mb-1 block text-sm font-medium">Address</label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                className="w-full rounded-sm border border-black bg-white px-3 py-2"
                                required
                                placeholder={auth.address[0].street}
                            />
                            <button className="rounded-sm border border-black bg-gray-100 px-3 py-2 text-sm hover:cursor-pointer hover:bg-gray-200">
                                Change
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

profile.layout = (page) => <Layout children={page} />;

export default profile;
