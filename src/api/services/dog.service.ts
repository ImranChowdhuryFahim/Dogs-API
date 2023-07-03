import CustomError from "../../utils/custom-error";
import { Dog } from "../models/interfaces/dog.interface";
import DogsRepository from "../repository/dog.repository";
type queryParams = {
    pageNumber?: number;
    pageSize?: number;
    attribute?: string;
    order?: string;
};
class DogsService {
    async getAllDogs({ pageNumber = 1, pageSize = 10, attribute = 'name', order = 'asc' }: queryParams) {
        return DogsRepository.findAllDogs({ pageNumber, pageSize, attribute, order });
    }
    async createDog(payLoad: Dog) {
        const nameExist = await DogsRepository.findDog(payLoad.name);
        if (nameExist) throw new CustomError('A dog already exist with this name', 403);

        return DogsRepository.createDog(payLoad);
    }
}

export default new DogsService();