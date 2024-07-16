import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  const expirationTime = Math.floor(Date.now() / 1000) + 24 * 60 * 60; // 24 jam dari sekarang
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

interface Iuser {
  id: string;
  username: string;
  email: string;
  password: string;
  gems: number;
  coins: number;
  exp: number;
  avatar: string;
}

export async function login(formData: FormData) {
  // Ambil data pengguna dari API
  const response = await fetch("http://localhost:3001/users");
  const users: Iuser[] = await response.json();

  // Ambil email dan password dari input form
  const emailInput = formData.get("email") as string;
  const passwordInput = formData.get("password") as string;

  // Validasi email dan password
  const user = users.find((user) => user.email === emailInput && user.password === passwordInput);

  if (!user) {
    const errorMessage = "Email atau Password salah";
    console.log(errorMessage);
    // Tambahkan logika untuk menampilkan pesan kesalahan jika diperlukan
  } else {
    // Buat sesi dengan informasi pengguna
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 jam dari sekarang
    const session = await encrypt({ user, expires });

    // Simpan sesi dalam cookie
    cookies().set("session", session, { expires, httpOnly: true });
    redirect("/");
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 jam dari sekarang
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
