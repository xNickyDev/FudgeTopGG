import { BotInfo } from "@top-gg/sdk";
import defineProperties from "@tryforge/forgescript/dist/functions/defineProperties";

export enum BotInfoProperty {
    id = "id",
    username = "username",
    discriminator = "discriminator",
    avatar = "avatar",
    defAvatar = "defAvatar",
    bannerUrl = "bannerUrl",
    prefix = "prefix",
    shortDesc = "shortDesc",
    longDesc = "longDesc",
    tags = "tags",
    website = "website",
    support = "support",
    github = "github",
    owners = "owners",
    guilds = "guilds",
    invite = "invite",
    date = "date",
    certifiedBot = "certifiedBot",
    vanity = "vanity",
    points = "points",
    monthlyPoints = "monthlyPoints",
    donateBotGuildId = "donateBotGuildId"
}

export const BotInfoProperties = defineProperties<typeof BotInfoProperty, BotInfo>({
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
})