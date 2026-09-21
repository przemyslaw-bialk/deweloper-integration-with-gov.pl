import AdminSidebar from "@/components/(ADMIN)/admin-sidebar/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="min-w-0 flex-1 overflow-auto p-6 md:p-8">
        {children}
      </main>
    </section>
  );
}
