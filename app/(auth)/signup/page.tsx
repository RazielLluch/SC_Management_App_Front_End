import {SignupStudentForm} from "@/app/(auth)/signup/components/signup-student-form";
import {SignupFacultyForm} from "@/app/(auth)/signup/components/signup-faculty-form";
import {SignupOrgForm} from "@/app/(auth)/signup/components/signup-org-form";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Page() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">

              <Tabs defaultValue="student" className="flex w-[400px]">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="student">Student</TabsTrigger>
                  <TabsTrigger value="faculty">Faculty</TabsTrigger>
                  <TabsTrigger value="org">Organization</TabsTrigger>
                </TabsList>
                <TabsContent value="student">
                  <SignupStudentForm />
                </TabsContent>
                <TabsContent value="faculty">
                  <SignupFacultyForm />
                </TabsContent>
                <TabsContent value="org">
                  <SignupOrgForm />
                </TabsContent>
              </Tabs>

            </div>
        </div>
    )
}
