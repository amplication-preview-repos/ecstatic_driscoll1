/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExpressionDataWhereUniqueInput } from "./ExpressionDataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ExpressionDataFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ExpressionDataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExpressionDataWhereUniqueInput)
  @Field(() => ExpressionDataWhereUniqueInput, { nullable: false })
  where!: ExpressionDataWhereUniqueInput;
}

export { ExpressionDataFindUniqueArgs as ExpressionDataFindUniqueArgs };
