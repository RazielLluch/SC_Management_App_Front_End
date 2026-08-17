"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import {signupFacultySchema, signupOrgSchema, signupStudentSchema} from "@/lib/validations/auth";
import {AccountType} from "@/lib/enums";


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

  const rawData = {
      email: formData.get("email"),
      password: formData.get("password"),
      options: {
        data: {
          account_type: AccountType.Student,
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          student_number: formData.get("student_number"),
          year_level: formData.get("year_level"),
          program: formData.get("program"),
        }
      }
    }

  console.log(rawData);

  const result = signupStudentSchema.safeParse(rawData);

  console.log(result);

  if (!result.success) {
    console.log(result.error);
  }

  const { error } = await supabase.auth.signUp(result.data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}


export async function signup_faculty(formData: FormData) {

  const supabase = await createClient();

  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
    options: {
      data: {
        account_type: AccountType.Faculty,
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        employee_number: formData.get("employee_number"),
        department: formData.get("department"),
      }
    }
  };

  console.log(rawData);

  const result = signupFacultySchema.safeParse(rawData);

  console.log(result);

  if (!result.success) {
    console.log(result.error);
  }

  const { error } = await supabase.auth.signUp(result.data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}


export async function signup_org(formData: FormData) {

  const supabase = await createClient();

  const rawData = {
      email: formData.get("email"),
      password: formData.get("password"),
      options: {
        data: {
          account_type: AccountType.Organization,
          name: formData.get("name"),
          short_name: formData.get("short_name"),
          organization_type: formData.get("organization_type"),
        }
      }
    }

    console.log(rawData);

  const result = signupOrgSchema.safeParse(rawData);

  console.log(result);

  if (!result.success) {
    console.log(result.error);
    redirect("/error");
  }

  const { error } = await supabase.auth.signUp(result.data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
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

