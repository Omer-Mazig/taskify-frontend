import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <div className="text-center space-y-4 bg-primary/20 p-8 rounded-sm">
        <h1 className="uppercase text-3xl sm:text-6xl">Welcome to Taskify!</h1>
        <p className="italic">Manage you task in the best app in the world</p>
        <Button size="humongous" asChild>
          <Link to="/auth/login">Login</Link>
        </Button>
        <p>Or</p>
        <Button size="humongous" asChild>
          <Link to="/auth/register">Register</Link>
        </Button>
      </div>
    </main>
  );
}

export default HomePage;
