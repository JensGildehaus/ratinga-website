import Image from "next/image";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
      <Image
        src="/logo.png"
        alt="Ratinga AI"
        width={400}
        height={100}
        style={{ width: "min(320px, 70vw)", height: "auto" }}
        priority
      />
    </div>
  );
}
