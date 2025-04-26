import { NextResponse } from 'next/server';

export function middleware(request) {
  const hostname = request.headers.get('host') || '';

  const isPreview = hostname.includes('-git-') || hostname.match(/-[a-z0-9]{9}-/);

  if (isPreview) {
    return NextResponse.redirect('https://mrbeast-count.vercel.app/', 302);
  }

  return NextResponse.next();
}
