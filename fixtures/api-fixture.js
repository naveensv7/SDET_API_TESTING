import { test as base, request } from "@playwright/test";
import { config } from "../config/env.js";

export const test = base.extend({
  api: async ({}, use) => {
    const context = await request.newContext({
      baseURL: config.baseUrl,
    });
    await use(context);
    await context.dispose();
  },
});
