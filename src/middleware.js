import { NextResponse } from "next/server";
import { getCookie } from "@/service/utils";

export function middleware(request) {
  const token = getCookie("token");
  // private route
  if (
    request.nextUrl.pathname.startsWith("/profile") ||
    request.nextUrl.pathname.startsWith("/home") ||
    request.nextUrl.pathname.startsWith("/detail-recipe")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // public route
  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register")
  ) {
    if (token) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }
}

export const config = {
  matcher: ["/profile/:slug*", "/home", "/login", "/detail-recipe/:slug*"],
};
