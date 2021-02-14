import Meet from "./Meet"

export default interface RetornoMeet {
    page_size: number;
    total_records: number;
    net_page_token: string;
    meetings: Meet[];
}