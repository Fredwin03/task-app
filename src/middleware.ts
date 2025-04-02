// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const referer = request.headers.get("referer");
  // const loginUrl = new URL("/login", request.url);
  // const registerUrl = new URL("/register", request.url);
  const enterEmailUrl = new URL("/enter-email", request.url);

  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  
  if(token && (pathname === "/login" || pathname === "/register" || pathname === "/enter-email")) {
    return NextResponse.redirect(new URL("/tasks", request.url));
  }

  if(!token && pathname === "/tasks") {
    return NextResponse.redirect(new URL("/enter-email", request.url));
  }

  if (
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register"
  ) {
    
    if (!referer || !referer.includes("/enter-email")) {
      return NextResponse.redirect(enterEmailUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/enter-email", "/tasks"],
};