import { test as base } from "./api-fixture.js";
import { postDataFixture } from "./postdata-fixture.js";

import { dbFixture } from "./dBFixture.js";
import { getDataFixture } from "./getData-fixture.js";
import { checkauthFixture } from "./checkauthFixture.js";
import { dbUtilityFixture } from "./dbUtilityFixture.js";
import { refreshTokenFixture } from "./refreshTokenFixture.js";
export const test = base
  .extend(dbFixture)
  .extend(postDataFixture)
  .extend(getDataFixture)
  .extend(checkauthFixture)
  .extend(dbUtilityFixture)
  .extend(refreshTokenFixture);

export { expect } from "@playwright/test";
