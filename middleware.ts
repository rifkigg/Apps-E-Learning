import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib"; // Pastikan path ini sesuai dengan lokasi file lib.ts

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("session")?.value;

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const session = await decrypt(sessionCookie);
    const expires = new Date(session.expires);

    if (expires < new Date()) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/transaksi",
    "/pembelian",
    "/notifikasi",
    "/profile",
    "/filter",
    "/protected/:path*",
  ],
};
