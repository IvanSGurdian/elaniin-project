export interface Locations {
    data: Location[];
}

export interface Location {
    id: number;
    name: string;
    opening_time: string;
    closing_time: string;
    address: string;
    latitude: string;
    longitude: string;
    type: string;
}
