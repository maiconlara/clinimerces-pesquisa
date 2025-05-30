import {NextResponse, NextRequest} from "next/server";
import { cookies } from 'next/headers'

const publicRoutes = ['/']


export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const isProtectedRoute = pathname !== "/";
    const isPublicRoute = publicRoutes.includes(pathname)

    const cookie = cookies().get('clinimerces_user_session')?.value

    if (isProtectedRoute && !cookie){
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (
        isPublicRoute &&
        cookie &&
        pathname !== "/"
      ) {
        return NextResponse.redirect(new URL('/home', request.url))
      }
     
      return NextResponse.next()
    }

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|404).*)'],
};