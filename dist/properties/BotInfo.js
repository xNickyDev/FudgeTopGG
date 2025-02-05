"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotInfoProperties = exports.BotInfoProperty = void 0;
const defineProperties_1 = __importDefault(require("@tryforge/forgescript/dist/functions/defineProperties"));
var BotInfoProperty;
(function (BotInfoProperty) {
    BotInfoProperty["id"] = "id";
    BotInfoProperty["username"] = "username";
    BotInfoProperty["discriminator"] = "discriminator";
    BotInfoProperty["avatar"] = "avatar";
    BotInfoProperty["defAvatar"] = "defAvatar";
    BotInfoProperty["bannerUrl"] = "bannerUrl";
    BotInfoProperty["prefix"] = "prefix";
    BotInfoProperty["shortDesc"] = "shortDesc";
    BotInfoProperty["longDesc"] = "longDesc";
    BotInfoProperty["tags"] = "tags";
    BotInfoProperty["website"] = "website";
    BotInfoProperty["support"] = "support";
    BotInfoProperty["github"] = "github";
    BotInfoProperty["owners"] = "owners";
    BotInfoProperty["guilds"] = "guilds";
    BotInfoProperty["invite"] = "invite";
    BotInfoProperty["date"] = "date";
    BotInfoProperty["certifiedBot"] = "certifiedBot";
    BotInfoProperty["vanity"] = "vanity";
    BotInfoProperty["points"] = "points";
    BotInfoProperty["monthlyPoints"] = "monthlyPoints";
    BotInfoProperty["donateBotGuildId"] = "donateBotGuildId";
})(BotInfoProperty || (exports.BotInfoProperty = BotInfoProperty = {}));
exports.BotInfoProperties = (0, defineProperties_1.default)({
    id: (i) => i?.id,
    username: (i) => i?.username,
    discriminator: (i) => i?.discriminator,
    avatar: (i) => i?.avatar,
    defAvatar: (i) => i?.defAvatar,
    bannerUrl: (i) => i?.bannerUrl,
    prefix: (i) => i?.prefix,
    shortDesc: (i) => i?.shortdesc,
    longDesc: (i) => i?.longdesc,
    tags: (i, sep) => i?.tags.join(sep ?? ", "),
    website: (i) => i?.website,
    support: (i) => i?.support,
    github: (i) => i?.github,
    owners: (i, sep) => i?.owners.join(sep ?? ", "),
    guilds: (i, sep) => i?.guilds.join(sep ?? ", "),
    invite: (i) => i?.invite,
    date: (i) => i?.date,
    certifiedBot: (i) => i?.certifiedBot,
    vanity: (i) => i?.vanity,
    points: (i) => i?.points,
    monthlyPoints: (i) => i?.monthlyPoints,
    donateBotGuildId: (i) => i?.donatebotguildid
});
//# sourceMappingURL=BotInfo.js.map