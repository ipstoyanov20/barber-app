import { ReservationVM, ReservationIM, ReservationApi, } from "@/api";
import { WebApiService } from "./web-api-service";
import { AxiosResponse } from "axios";
 export class ReservationService extends WebApiService {
  reservationApi: ReservationApi;
    constructor() {
        super();
        this.reservationApi = new ReservationApi();
    }
    public async makeReservationIdGetRequest(): Promise<AxiosResponse<ReservationVM[], any>> {
        return await this.reservationApi.reservationUserIdGet(this.generateHeader());
    }
    public async makeReservationPostRequest(reservationIM: ReservationIM): Promise<AxiosResponse<ReservationVM, any>> {
        return await this.reservationApi.reservationPost(reservationIM, this.generateHeader());
    }
 }
 const reservationService = new ReservationService();
 export default reservationService;