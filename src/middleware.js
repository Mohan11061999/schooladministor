import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = cookies().get('Authorization');
    if (!token?.value) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/home/:path*'],
}