import { environment } from "src/environments/environment";
import { AttendanceLog } from "./attendanceLog";

export class Student {
    constructor (
        public id: string,
        public fullName: string,
        public profilePhoto: string,
        public attendanceLogs: AttendanceLog[]
    ) {}

    
    public get profilePhotoUrl(): string {
        return `${environment.API_URL + this.profilePhoto}`;
    }
    
}