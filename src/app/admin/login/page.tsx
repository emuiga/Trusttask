"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simple password check (in production, use proper authentication)
    if (password === "trusttask-admin-2024") {
      // Store admin token in localStorage
      localStorage.setItem("adminToken", "trusttask-admin-2024");
      router.push("/admin");
    } else {
      setError("Invalid password");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-[#00ffb0] rounded-full flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-[#18181b]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Admin Access</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your password to access the support dashboard
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffb0] focus:border-transparent focus:z-10 sm:text-sm"
                placeholder="Enter admin password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-[#18181b] bg-[#00ffb0] hover:bg-[#00e6a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00ffb0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Default password: trusttask-admin-2024
          </p>
        </div>
      </div>
    </div>
  );
} 