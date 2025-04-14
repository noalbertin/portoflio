// app/robots.txt/route.ts

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://noalbertin.vercel.app/sitemap.xml
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
