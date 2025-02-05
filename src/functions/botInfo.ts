import { Api } from "@top-gg/sdk"
import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { ForgeTopGG } from ".."
import { BotInfoProperties, BotInfoProperty } from "../properties/BotInfo"

export default new NativeFunction({
    name: "$botInfo",
    version: "1.1.2",
    description: "Returns information about the bot",
    brackets: true,
    args: [
        {
            name: "property",
            description: "The property to return",
            rest: false,
            required: true,
            type: ArgType.Enum,
            enum: BotInfoProperty
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String,
        }
    ],
    unwrap: true,
    output: ArgType.Boolean, 
    async execute(ctx, [prop, sep]) {
        const info = await new Api(ctx.getExtension(ForgeTopGG, true)["options"].token).getBot(ctx.client.user.id).catch(ctx.noop)
        return this.success(info ? BotInfoProperties[prop](info, sep) : null)
    },
})