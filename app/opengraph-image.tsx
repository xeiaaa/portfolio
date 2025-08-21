import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bret Axl Sebastian Pura - Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              margin: "0 0 20px 0",
              background: "linear-gradient(45deg, #60a5fa, #a78bfa)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Bret Axl Sebastian Pura
          </h1>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "600",
              margin: "0 0 30px 0",
              color: "#94a3b8",
            }}
          >
            Full Stack Developer
          </h2>
          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.5",
              margin: "0",
              color: "#cbd5e1",
              maxWidth: "600px",
            }}
          >
            Specializing in React, Node.js, Next.js, and NestJS with 9+ years of
            experience building modern web applications.
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["React", "Node.js", "Next.js", "NestJS", "TypeScript"].map(
              (tech) => (
                <span
                  key={tech}
                  style={{
                    background: "rgba(96, 165, 250, 0.2)",
                    border: "1px solid #60a5fa",
                    borderRadius: "20px",
                    padding: "8px 16px",
                    fontSize: "16px",
                    color: "#60a5fa",
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
