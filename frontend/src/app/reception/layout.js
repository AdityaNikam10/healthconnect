import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function ReceptionLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />
        <main style={{ padding: "24px" }}>{children}</main>
      </div>
    </div>
  );
}