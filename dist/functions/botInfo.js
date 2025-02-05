"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("@top-gg/sdk");
const forgescript_1 = require("@tryforge/forgescript");
const __1 = require("..");
const BotInfo_1 = require("../properties/BotInfo");
exports.default = new forgescript_1.NativeFunction({
    name: "$botInfo",
    description: "Returns information about the bot",
    brackets: true,
    args: [
        {
            name: "property",
            description: "The property to return",
            rest: false,
            required: true,
            type: forgescript_1.ArgType.Enum,
            enum: BotInfo_1.BotInfoProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: forgescript_1.ArgType.String,
        }
    ],
    unwrap: true,
    output: forgescript_1.ArgType.Boolean,
    async execute(ctx, [prop, sep]) {
        const info = await new sdk_1.Api(ctx.getExtension(__1.ForgeTopGG, true)["options"].token).getBot(ctx.client.user.id).catch(ctx.noop);
        return this.success(info ? BotInfo_1.BotInfoProperties[prop](info, sep) : null);
    },
});
//# sourceMappingURL=botInfo.js.map