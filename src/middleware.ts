import { NextRequest, NextResponse } from "next/server";
import { isValidPassword } from "./lib/isValidPassword";

export async function middleware(req: NextRequest) {
  // Skip authentication in development mode
  if (
    process.env.NODE_ENV === "development" &&
    process.env.SKIP_AUTH === "true"
  ) {
    return NextResponse.next();
  }

  if ((await isAuthenticated(req)) === false) {
    return new NextResponse(
      "Unauthorized: You don't have access to this page",
      {
        status: 401,
        headers: { "WWW-Authenticate": "Basic" },
      },
    );
  }
}

const isAuthenticated = async (req: NextRequest) => {
  const authHeader =
    req.headers.get("authorization") || req.headers.get("Authorization");

  if (authHeader === null) return false;

  const [username, password] = Buffer.from(
    authHeader.split(" ")[1] as string,
    "base64",
  )
    .toString()
    .split(":");

  if (!password) return false;

  return (
    username === process.env.ADMIN_USERNAME &&
    (await isValidPassword(
      password,
      process.env.ADMIN_HASHED_PASSWORD as string,
    ))
  );
};

// we are applying this middleware to every path within /admin whether it is /admin/ or something else
export const config = {
  matcher: "/admin/:path*",
};
