// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '@/layouts/main-layout';
import { ReactNode } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <Head title="Forgot password" />

            <div className="w-full max-w-md space-y-6 rounded-2xl border bg-white p-8 shadow-lg">
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">Forgot your password?</h2>
                <p className="text-center text-sm text-gray-500">Enter your email and we’ll send you a password reset link.</p>

                {status && <div className="rounded-md bg-green-100 px-4 py-2 text-center text-sm font-medium text-green-700">{status}</div>}

                <form onSubmit={submit} className="space-y-4">
                    <div className="grid gap-1">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="off"
                            value={data.email}
                            autoFocus
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="you@example.com"
                        />
                        {errors.email && <p className="text-sm font-medium text-red-600">{errors.email}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={processing}>
                        {processing ? (
                            <span className="flex items-center justify-center gap-2">
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                Sending...
                            </span>
                        ) : (
                            'Email password reset link'
                        )}
                    </Button>
                </form>

                <div className="text-center text-sm text-gray-500">
                    Or, return to{' '}
                    <a className="font-medium text-blue-600 hover:underline" href={route('login')}>
                        log in
                    </a>
                </div>
            </div>
        </div>
    );
}

ForgotPassword.layout = (page: ReactNode) => <Layout children={page} />;
