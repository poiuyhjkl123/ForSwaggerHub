/**
 * Dassana Org Manager Service
 * This service is responsible for all things org management - org, teams, members. Note that in the context of this service, a user is a member
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ErrorInfo } from './errorInfo';

export interface InternalError extends ErrorInfo { 
    /**
     * Request id as provided by the client. Please provide this id when you contact the Dassana Support.
     */
    requestId?: string;
}