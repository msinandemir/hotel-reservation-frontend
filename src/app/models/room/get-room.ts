import { RoomType } from "../enums/room-type";

export interface GetRoom {
  id: number;
  createdAt: string;
  updatedAt: string;
  capacity: number;
  price: number;
  availability: boolean;
  singleBed: number;
  doubleBed: number;
  bunkBed: number;
  type: RoomType;
  hotelId: number;
}
