import { TimeSpan, Reservation, ReservationApi, User } from "@/api";
import { WebApiService } from "./web-api-service";
import { AxiosResponse } from "axios";
 export class ReservationService extends WebApiService {
  reservationApi: ReservationApi;
    constructor() {
        super();
        this.reservationApi = new ReservationApi();
    }
    // public async makeReservationRequest(reservation: Reservation): Promise<AxiosResponse<Reservation, any>> {
    //     return await this.reservationApi.reservationPost(reservation, this.generateHeader());
    // }
 }