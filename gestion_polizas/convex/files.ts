import { handler } from 'tailwindcss-animate'
import {mutation, query} from './_generated/server'
import { ConvexError, v } from 'convex/values'

export const createFile = mutation({
    args:{
        name: v.string(),
    },
    async handler(ctx,args){
        const identity = await ctx.auth.getUserIdentity();

        if(!identity){
            throw new ConvexError("error de testeo");
        }
        await ctx.db.insert("files",{
            name: args.name,
        })
    },
});

export const getfiles = query({
    args:{},
    async handler(ctx, args){
        const identity = await ctx.auth.getUserIdentity();

        if(!identity){
            return [];
        }
        return ctx.db.query('files').collect();
    }
})