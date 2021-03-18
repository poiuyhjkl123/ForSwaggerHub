export * from './members.service';
import { MembersService } from './members.service';
export * from './org.service';
import { OrgService } from './org.service';
export * from './teams.service';
import { TeamsService } from './teams.service';
export const APIS = [MembersService, OrgService, TeamsService];
