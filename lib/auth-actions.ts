"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import {apiFetch} from "@/utils/api/fetch";


export async function signin(formData: FormData) {
    const supabase = await createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
}


export async function signup_student(formData: FormData) {

  const supabase = await createClient();

  const response = await apiFetch(
    supabase,
    "/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        student_number: formData.get("student_number"),
        year_level: formData.get("year_level"),
        program: formData.get("program"),
      })
    }
  )

    if (!response.ok) {
        // handle error
        console.log(response);
        redirect("/error");
    }

    redirect("/");
}


export async function signup_faculty(formData: FormData) {

  const supabase = await createClient();

  const response = await apiFetch(
    supabase,
    "/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        employee_number: formData.get("student_number"),
        department: formData.get("department"),
      })
    }
  )

  if (!response.ok) {
    // handle error
    console.log(response);
    redirect("/error");
  }

  redirect("/");
}


export async function signup_org(formData: FormData) {

  const supabase = await createClient();

  const response = await apiFetch(
    supabase,
    "/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
        short_name: formData.get("short_name"),
        organization_type: formData.get("organization_type"),
      })
    }
  )

  if (!response.ok) {
    // handle error
    console.log(response);
    redirect("/error");
  }

  redirect("/");
}


export async function signout() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.log(error);
        redirect("/error");
    }

    redirect("/signout");
}

