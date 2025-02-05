import { ArgType, NativeFunction } from "@tryforge/forgescript"
import { ForgeTopGG } from ".."
import { Api } from "@top-gg/sdk"

export default new NativeFunction({
    name: "$monthlyVotes",
    version: "1.0.0",
    description: "Gets total votes of the bot this month",
    unwrap: false,
    output: ArgType.Boolean, 
    async execute(ctx) {
        return this.success((await new Api(ctx.getExtension(ForgeTopGG, true)["options"].token).getBot(ctx.client.user.id).catch(ctx.noop))?.monthlyPoints)
    },
})