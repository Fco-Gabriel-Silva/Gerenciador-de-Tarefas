import { pickRankAsset } from "../utils/pick-rank-asset.js";

export class Task {
  name;
  rankInfo;
  statusInfo;
  updatedAt;
  deletedAt;

  constructor(data) {
    const name = data.name;
    const rankName = data.rankName || data.rankInfo?.name;
    const statusTask = data.statusTask ?? data.statusInfo?.statusTask ?? false;
    const completeDate =
      data.completeDate ?? data.statusInfo?.completeDate ?? null;
    const updatedAt = data.updatedAt ?? null;
    const deletedAt = data.deletedAt ?? null;

    const assetRank = pickRankAsset(rankName);

    this.name = name;
    this.rankInfo = {
      name: rankName,
      asset: assetRank,
    };
    this.statusInfo = {
      statusTask: statusTask,
      completeDate: completeDate,
    };
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  complete() {
    this.statusInfo.statusTask = true;
    this.statusInfo.completeDate = new Date().toLocaleDateString("pt-br");
  }

  uncomplete() {
    this.statusInfo.statusTask = false;
    this.statusInfo.completeDate = null;
  }
}
