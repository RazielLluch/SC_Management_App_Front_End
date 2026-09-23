import type { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

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

  const api_endpoint = `${API_URL}${endpoint}`;

  console.log(`API Endpoint: ${api_endpoint}`)

  let response: Response;

  try {
    response = await fetch(api_endpoint, {
      ...options,
      headers,
    });
  } catch (error) {
    const status = error instanceof DOMException && error.name === "AbortError"
      ? 504
      : 503;

    const message = error instanceof Error ? error.message : "Request failed.";

    redirect(`/error?status=${status}&message=${encodeURIComponent(message)}`);
  }

  if (!response.ok) {
    const message =
      response.statusText || `Request failed with status ${response.status}.`;
    redirect(
      `/error?status=${response.status}&message=${encodeURIComponent(message)}`
    );
  }

  return response;
}