/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Coach } from "./Coach";
import { CoachCountArgs } from "./CoachCountArgs";
import { CoachFindManyArgs } from "./CoachFindManyArgs";
import { CoachFindUniqueArgs } from "./CoachFindUniqueArgs";
import { DeleteCoachArgs } from "./DeleteCoachArgs";
import { CoachService } from "../coach.service";
@graphql.Resolver(() => Coach)
export class CoachResolverBase {
  constructor(protected readonly service: CoachService) {}

  async _coachesMeta(
    @graphql.Args() args: CoachCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Coach])
  async coaches(@graphql.Args() args: CoachFindManyArgs): Promise<Coach[]> {
    return this.service.coaches(args);
  }

  @graphql.Query(() => Coach, { nullable: true })
  async coach(
    @graphql.Args() args: CoachFindUniqueArgs
  ): Promise<Coach | null> {
    const result = await this.service.coach(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Coach)
  async deleteCoach(
    @graphql.Args() args: DeleteCoachArgs
  ): Promise<Coach | null> {
    try {
      return await this.service.deleteCoach(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
