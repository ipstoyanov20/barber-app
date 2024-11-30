import {UserUM} from "@/api";
import {UserVM} from "@/api";
import {WebApiService} from "@/services/web-api-service";
import {AxiosResponse} from "axios";
import {UserApi} from "@/api/apis/user-api";
export class UserAddService extends WebApiService {
    userApi: UserApi;
    constructor() {
        super();
        this.userApi = new UserApi();
    }
    public async makeUserPutRequest(user: UserUM, userEmail: string): Promise<AxiosResponse<boolean, any>> {
        return await this.userApi.userPut(user, userEmail, this.generateHeader());
    }
    public async makeUserCurrentGetRequest(): Promise<AxiosResponse<UserVM, any>> {
        return await this.userApi.userCurrentGet(this.generateHeader());
    }
}