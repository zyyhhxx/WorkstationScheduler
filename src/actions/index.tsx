import * as constants from '../constants'
import { Workstation } from "./../components/Workstation"

export interface ChangeDay {
    type: constants.CHANGE_DAY;
    newDay: number;
}

export interface UpdateWorkstations {
    type: constants.UPDATE_WORKSTATIONS;
    newWorkstations: Workstation[];
}

export interface UpdateFieldValue {
    type: constants.UPDATE_FIELD_VALUE;
    newValue: string;
}

export interface ChangeUser {
    type: constants.CHANGE_USER;
    newUserName: string;
}

export type SchedulerAction = ChangeDay | UpdateWorkstations | ChangeUser;
export type NameFormAction = UpdateFieldValue;

export function changeDay(day: number): ChangeDay {
    return {
        type: constants.CHANGE_DAY,
        newDay: day
    }
}

export function updateWorkstations(workstations: Workstation[]): UpdateWorkstations {
    return {
        type: constants.UPDATE_WORKSTATIONS,
        newWorkstations: workstations
    }
}

export function updateFieldValue(value: string): UpdateFieldValue {
    return {
        type: constants.UPDATE_FIELD_VALUE,
        newValue: value
    }
}

export function changeUser(userName: string): ChangeUser {
    return {
        type: constants.CHANGE_USER,
        newUserName: userName
    }
}