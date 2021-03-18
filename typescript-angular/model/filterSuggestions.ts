/**
 * Alert Manager API Spec
 * Alert Manager API spec. This spec represents the Alert Management service whose current objective is to prioritize the alerts based upon context.  
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@dassana.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Filters } from './filters';
import { TeamId } from './teamId';

export interface FilterSuggestions { 
    key?: string;
    operator?: string;
    search?: string;
    teamId?: TeamId;
    filters?: Filters;
}