"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
const sdk_1 = require("@top-gg/sdk");
exports.default = new forgescript_1.NativeFunction({
    name: "$monthlyVotes",
    version: "1.0.0",
    description: "Gets total votes of the bot this month",
    unwrap: false,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx) {
        return this.success((await new sdk_1.Api(ctx.getExtension(__1.ForgeTopGG, true)["options"].token).getBot(ctx.client.user.id).catch(ctx.noop))?.monthlyPoints);
    },
});
//# sourceMappingURL=monthlyVotes.js.map