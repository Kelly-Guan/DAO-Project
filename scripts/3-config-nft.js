import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  process.env.BUNDLE_DROP_MODULE,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Naughty Brie Man",
        description: "Mr. Brie has been in a bad mood",
        image: readFileSync("scripts/assets/brie.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()