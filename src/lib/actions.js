'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export const serveract = async (prevState, formData) => {
    const payload = {
        userid: formData.get('email'),
        pwd: formData.get('password'),
        role: formData.get('role'),
    }
    const res = await fetch(process.env.BASE_URL + '/api/login', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    const json = await res.json();
    console.log(json, "Hello")
    if (res.ok) {
        cookies().set('Authorization', json, {
            secure: true,
            httpOnly: true,
            expires: Date.now() + 24 * 60 * 60 * 1000 * 3,// 3 days
            path: '/',
            sameSite: 'strict'
        });
        redirect('/home/dashboard');
    } else {
        return { error: json.devMessage || json.detail };
    }
    // const token = cookies().get('Authorization');


    return { message: `Login successful` };
}
