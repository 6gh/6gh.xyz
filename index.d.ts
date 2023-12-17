declare module "nuxt/schema" {
  interface AppConfig {
    // This will entirely replace the existing inferred `theme` property
    title: string;
    description: string;
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {};
