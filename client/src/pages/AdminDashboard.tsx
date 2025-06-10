import { useAdminAuth } from "@/hooks/useAdminAuth";

export default function AdminDashboard() {
    const { user, loading } = useAdminAuth();

    if (loading) return <div>Loading...</div>;
    if (!user) return null; // Redirect handled by hook

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
            <p>Welcome, {user.email}!</p>
            {/* Add admin features here */}
        </div>
    );
}
