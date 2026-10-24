import { pickRankAsset } from "../utils/pick-rank-asset.js";

export class Task {
  name;
  rankInfo;
  statusInfo;
  updatedAt;
  deletedAt;

  constructor(name, rankName) {
    const assetRank = pickRankAsset(rankName);

    this.name = name;
    this.rankInfo = {
      name: rankName,
      asset: assetRank,
    };
    this.statusInfo = {
      statusTask: false,
      completeDate: null,
    };
    this.updatedAt = null;
    this.deletedAt = null;
  }
}
