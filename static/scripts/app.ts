import { pay } from "./pay";
import { renderTransaction } from "./render-transaction";

(async function appAsyncWrapper() {
  try {
    // display commit hash
    const commit = await fetch("commit.txt");
    if (commit.ok) {
      const commitHash = await commit.text();
      const buildElement = document.querySelector(`#build a`) as HTMLAnchorElement;
      buildElement.innerHTML = commitHash;
      buildElement.href = `https://github.com/ubiquity/pay.ubq.fi/commit/${commitHash}`;
    }
    await renderTransaction();
    await pay();
  } catch (error) {
    console.error(error);
  }
})();
