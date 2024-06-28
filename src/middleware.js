import { NextResponse } from "next/server";
import { getCookie } from "@/service/utils";

export function middleware(request) {
  const token = getCookie("token");
  // private route
  if (
    request.nextUrl.pathname.startsWith("/profile") ||
    request.nextUrl.pathname.startsWith("/home")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/profile/:slug*", "/home"],
};
