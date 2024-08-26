/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CoachWhereInput } from "./CoachWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CoachListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CoachWhereInput,
  })
  @ValidateNested()
  @Type(() => CoachWhereInput)
  @IsOptional()
  @Field(() => CoachWhereInput, {
    nullable: true,
  })
  every?: CoachWhereInput;

  @ApiProperty({
    required: false,
    type: () => CoachWhereInput,
  })
  @ValidateNested()
  @Type(() => CoachWhereInput)
  @IsOptional()
  @Field(() => CoachWhereInput, {
    nullable: true,
  })
  some?: CoachWhereInput;

  @ApiProperty({
    required: false,
    type: () => CoachWhereInput,
  })
  @ValidateNested()
  @Type(() => CoachWhereInput)
  @IsOptional()
  @Field(() => CoachWhereInput, {
    nullable: true,
  })
  none?: CoachWhereInput;
}
export { CoachListRelationFilter as CoachListRelationFilter };
