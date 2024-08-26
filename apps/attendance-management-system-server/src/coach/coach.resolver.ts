import * as graphql from "@nestjs/graphql";
import { CoachResolverBase } from "./base/coach.resolver.base";
import { Coach } from "./base/Coach";
import { CoachService } from "./coach.service";

@graphql.Resolver(() => Coach)
export class CoachResolver extends CoachResolverBase {
  constructor(protected readonly service: CoachService) {
    super(service);
  }
}
