// Components
import { Head, router, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import { Button } from '@/components/ui/button';
import Layout from '@/layouts/main-layout';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    const logout = () => {
        router.post('/logout');
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <Head title="Email verification" />

            <div className="w-full max-w-md space-y-6 rounded-2xl border bg-white p-8 text-center shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">Verify your email</h2>
                <p className="text-sm text-gray-500">
                    Thanks for signing up! Before getting started, please verify your email address by clicking the link we just emailed to you. If
                    you didn’t receive the email, we’ll gladly send you another.
                </p>

                {status === 'verification-link-sent' && (
                    <div className="rounded-md bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                        A new verification link has been sent to the email address you provided during registration.
                    </div>
                )}

                <form onSubmit={submit} className="space-y-4">
                    <Button disabled={processing} className="w-full cursor-pointer border">
                        {processing ? (
                            <span className="flex items-center justify-center gap-2">
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                Resending...
                            </span>
                        ) : (
                            'Resend verification email'
                        )}
                    </Button>

                    <button onClick={logout} className="font-bold text-blue-600 hover:cursor-pointer">
                        Logout
                    </button>
                </form>
            </div>
        </div>
    );
}

VerifyEmail.layout = (page) => <Layout children={page} />;
