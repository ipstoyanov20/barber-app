import {UserIM,User} from "@/api";
import {WebApiService} from "@/services/web-api-service";
import {AxiosResponse} from "axios";
import {UserApi} from "@/api/apis/user-api";
export class UserAddService extends WebApiService {
    userApi: UserApi;
    constructor() {
        super();
        this.userApi = new UserApi();
    }
    public async makeUserPostRequest(user: UserIM): Promise<AxiosResponse<User, any>> {
        return await this.userApi.userPost(user, this.generateHeader());
    }
    public async makeUserIdGetRequest(id: string): Promise<AxiosResponse<User, any>> {
        return await this.userApi.userIdGet(id, this.generateHeader());
    }
}