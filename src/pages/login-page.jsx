import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";

function LoginPage() {
  const { login } = useAuth();

  function handleLogin(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const username = form.get("username");
    const password = form.get("password");

    login({ username, password });
  }

  return (
    <Card className="shadow-2xl min-w-96">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Login</span> <LogIn />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <Label>Username:</Label>
            <Input
              name="username"
              type="text"
              placeholder="Enter username..."
            />
          </div>
          <div>
            <Label>Password:</Label>
            <Input
              name="password"
              type="password"
              placeholder="Enter password..."
            />
          </div>

          <Button>Login</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-xs">
          Dont have an account?{" "}
          <Link className="underline font-bold" to="/auth/register">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

export default LoginPage;
