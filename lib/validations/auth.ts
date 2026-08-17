import { z } from "zod";
import {AccountType, OrganizationTypeSchema} from "@/lib/enums";

export const signupStudentSchema = z.object({
  email: z.email(),
  password: z.string(),

  options: z.object({
    data: z.object({
      account_type: z.literal(AccountType.Student),
      first_name: z.string(),
      last_name: z.string(),
      student_number: z.string(),
      year_level: z.coerce.number().int().min(1).max(5),
      program: z.string(),
    })
  })
});

export const signupFacultySchema = z.object({
  email: z.email(),
  password: z.string(),

  options: z.object({
    data: z.object({
      account_type: z.literal(AccountType.Faculty),
      first_name: z.string(),
      last_name: z.string(),
      employee_number: z.string().nullable(),
      department: z.string().nullable(),
    })
  })
});

export const signupOrgSchema = z.object({
  email: z.email(),
  password: z.string(),

  options: z.object({
    data: z.object({
      account_type: z.literal(AccountType.Organization),
      name: z.string(),
      short_name: z.string(),
      organization_type: OrganizationTypeSchema,
    })
  })
});