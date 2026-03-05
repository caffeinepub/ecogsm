import { Outlet } from "@tanstack/react-router";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
