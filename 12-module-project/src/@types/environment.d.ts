declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_CONTACT_URL: string;
    }
  }
}

export {};
