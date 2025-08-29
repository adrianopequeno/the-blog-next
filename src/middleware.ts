import { NextRequest, NextResponse } from 'next/server';
import { verifyJwt } from './lib/login/manage-login';

export async function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login');
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
  const isGetMethod = request.method === 'GET';

  const shouldBeAuthenticated = isAdminPage && !isLoginPage; // requisição GET para páginas admin, exceto a página de login
  const shouldRedirect = shouldBeAuthenticated && isGetMethod; // requisição POST.

  if (!shouldRedirect) {
    return NextResponse.next();
  }

  const jwtSesseion = request.cookies.get(
    process.env.COOKIE_NAME || 'loginSession'
  )?.value;
  const isAuthenticated = await verifyJwt(jwtSesseion);

  if (!isAuthenticated) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
