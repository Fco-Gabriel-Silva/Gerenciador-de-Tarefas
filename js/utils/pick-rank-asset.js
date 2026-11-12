import { ASSETS_PATH } from "../consts/assets-path.js";

export function pickRankAsset(rankName) {
  switch (rankName) {
    case "A":
      return `${ASSETS_PATH}/rank_a.png`;

    case "B":
      return `${ASSETS_PATH}/rank_b.png`;

    case "C":
      return `${ASSETS_PATH}/rank_c.png`;

    default:
      console.error("Tipo de rank inexistente");
  }
}
