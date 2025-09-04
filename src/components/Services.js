// src/components/Services.js
import React from "react";
import portfolioData from "../data/portfolioData";

const Services = () => {
  const { services, theme } = portfolioData;

  return (
    <section
      id="services"
      style={{
        padding: "100px 2rem",
        background: theme.light,
        color: theme.dark,
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                color: theme.dark,
                borderRadius: "12px",
                padding: "2rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{service.icon}</div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{service.title}</h3>
              <p style={{ fontSize: "1rem", opacity: 0.9, lineHeight: "1.6" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
