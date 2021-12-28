declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_NEWSLETTER_URL: string;
      MONGODB_EVENTS_URL: string;
    }
  }
}

export {};
