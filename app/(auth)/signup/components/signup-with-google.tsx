"use client";

import React from 'react';
import {Button} from "@/components/ui/button";
import {signInWithGoogle} from "@/lib/auth-actions";

const SignupWithGoogleButton = () => {
    return (
        <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => {
                signInWithGoogle();
            }}
        >
            Sign up with Google
        </Button>
    )
}

export default SignupWithGoogleButton;