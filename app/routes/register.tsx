import { Form, isRouteErrorResponse, json, useActionData, useRouteError } from '@remix-run/react';

export async function action({ request }: { request: Request }) {
    const form = await request.formData();
    const email = form.get('email') as string;
    // const password = form.get('password');
    // console.log(email, password);
    return json({ email });
}

export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </div>
        );
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}

const Register = () => {
    const data = useActionData<typeof action>();
    return (
        <div>
            <h1>Register</h1>
            {data ? data.email : 'Waiting...'}
            <Form method="post">
                <input name="email" placeholder="Enter mail" />
                <input name="password" type="password" placeholder="Enter password" />
                <button type="submit">Register</button>
            </Form>
        </div>
    );
};

export default Register;
