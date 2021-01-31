import UserZoom from "./UserZoom"

export default interface RetornoGetUsersZoom {
    next_page_token: string;
    page_count: number;
    page_number: number;
    page_size: number;
    total_records: number;
    users: UserZoom[];
}