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
      {
        amoled: {
          primary: "#007EA7",
          secondary: "#4361ee",
          accent: "#00A8E8",
          neutral: "#0F0F0F",
          "base-100": "#000000",
          "base-200": "#0F0F0F",
          "base-300": "#0F0F0F",
          info: "#00b5ff",
          success: "#06d6a0",
          warning: "#ffb703",
          error: "#c1121f",
        },
      },

      "light",
      "autumn",
      "nord",
    ],
    darkMode: "main",
  },
  plugins: [require("daisyui")],
};
