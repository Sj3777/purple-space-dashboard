import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const url = req.url;
  const token = req.cookies.get('token');

  if (!token && url !== '/') {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}
