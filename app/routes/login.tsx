import { Form, useNavigation } from '@remix-run/react';

export async function action({ request }: { request: Request }) {
    const form = await request.formData();
    const title = form.get('title');
    console.log(title);
    let total = 0;
    for (let i = 0; i <= 5000000000; i++) {
        total += i;
    }
    return {
        title,
        total,
    };
}

const Login = () => {
    const { state } = useNavigation();
    const busy = state === 'submitting';
    return (
        <div>
            <h1>Login</h1>
            <Form method="post">
                <input name="title" placeholder="enter title" />
                <button type="submit" disabled={busy}>
                    {busy ? 'Creating...' : 'Create New Project'}
                </button>
            </Form>
        </div>
    );
};

export default Login;
