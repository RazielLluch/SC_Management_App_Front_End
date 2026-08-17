import type { SupabaseClient } from "@supabase/supabase-js";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function apiFetch(
  supabase: SupabaseClient,
  endpoint: string,
  options: RequestInit = {}
) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const headers = new Headers(options.headers);

  if (session?.access_token) {
    headers.set(
      "Authorization",
      `Bearer ${session.access_token}`
    );
  }

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });
}