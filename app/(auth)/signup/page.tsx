import {SignupStudentForm} from "@/app/(auth)/signup/components/signup-student-form";
import {SignupFacultyForm} from "@/app/(auth)/signup/components/signup-faculty-form";
import {SignupOrgForm} from "@/app/(auth)/signup/components/signup-org-form";

export default function Page() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <SignupStudentForm />
            </div>
        </div>
    )
}
