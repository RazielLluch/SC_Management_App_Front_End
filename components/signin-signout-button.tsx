"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";
import {NavUser} from "@/components/nav-user";

const SigninButton = () => {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();
    const supabase = createClient();
    useEffect(() => {
        const fetchUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user);
        };
        fetchUser();
    }, []);
    if (user) {
        return (
            <NavUser
                user={user}
                logout={() => {
                    signout();
                    setUser(null);
                }}
            />
        );
    }
    return (
        <Button
            variant="outline"
            onClick={() => {
                router.push("/signin");
            }}
        >
            Login
        </Button>
    );
};

export default SigninButton;