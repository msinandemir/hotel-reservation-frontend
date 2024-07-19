import { RoomType } from '../enums/room-type';

export interface UpdateRoom {
  capacity: number;
  price: number;
  availability: boolean;
  singleBed: number;
  doubleBed: number;
  bunkBed: number;
  type: RoomType;
  hotelId: number;
}
