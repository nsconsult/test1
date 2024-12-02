import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get('user_token'); 
  const role = (req.cookies.get('user_role')); 

  const tokenValue = token ? token.value : null;
  const roleValue = role ? role.value : null;

  console.log("servertoken: " + tokenValue);
  console.log("serverrole: " + roleValue);

  // const adminRoutes = ["/dashboardUser"];
  // const userRoutes = ["/dashboardAdmin"];
  // const entrepriseRoutes = ["/dashboardEntreprise"];
  // const ecoleRoutes = ["/dashboardEducation"];

  if (!tokenValue) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const pathname = req.nextUrl.pathname;
  console.log(pathname);

  if (pathname.startsWith("/dashboardAdmin") && roleValue !== '1') {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (pathname.startsWith("/dashboardUser") && roleValue !== '2') {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (pathname.startsWith("/dashboardEntreprise") && roleValue !== '3') {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (pathname.startsWith("/dashboardEducation") && roleValue !== '4') {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }


  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboardAdmin/:path*",
    "/dashboardUser/:path*",
    "/dashboardEntreprise/:path*",
    "/dashboardEducation/:path*",
  ],
};
