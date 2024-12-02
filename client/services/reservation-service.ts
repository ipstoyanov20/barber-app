import { TimeSpan, Reservation, ReservationIM, ReservationApi, } from "@/api";
import { WebApiService } from "./web-api-service";
import { AxiosResponse } from "axios";
 export class ReservationService extends WebApiService {
  reservationApi: ReservationApi;
    constructor() {
        super();
        this.reservationApi = new ReservationApi();
    }
    public async makeReservationIdGetRequest(userId:string): Promise<AxiosResponse<Reservation, any>> {
        return await this.reservationApi.reservationIdGet(userId, this.generateHeader());
    }
    public async makeReservationPostRequest(reservationIM: ReservationIM, userId: string): Promise<AxiosResponse<Reservation, any>> {
        return await this.reservationApi.reservationPost(reservationIM, userId, this.generateHeader());
    }
 }
 const reservationService = new ReservationService();
 export default reservationService;