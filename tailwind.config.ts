import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  daisyui: {
    themes: [
      {
        main: {
          primary: "#007EA7",
          secondary: "#4361ee",
          accent: "#00A8E8",
          neutral: "#003345",
          "base-100": "#00171F",
          info: "#00b5ff",
          success: "#06d6a0",
          warning: "#ffb703",
          error: "#c1121f",
        },
      },
      "night",
      "corporate",
    ],
    darkMode: "main",
  },
  plugins: [require("daisyui")],
};
