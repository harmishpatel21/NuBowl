import { useEffect, useState } from "react";
import { onAuthChange, User } from "@/lib/firebase";
import { useLocation } from "wouter";

export function useAdminAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [, navigate] = useLocation();

    useEffect(() => {
        const unsubscribe = onAuthChange((firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
            if (!firebaseUser) {
                navigate("/admin-login");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    return { user, loading };
}
