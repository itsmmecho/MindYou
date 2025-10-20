import { NextResponse } from 'next/server';

export async function GET() {
  const backendUrl = process.env.API_URL || 'http://localhost:4000/api/hello';
  try {
    const res = await fetch(backendUrl);
    const data = await res.json();
    return NextResponse.json({ proxied: true, data });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to fetch backend', details: String(err) },
      { status: 500 }
    );
  }
}
