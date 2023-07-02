import logger from "../../logger";
import { DogsInstance } from "../models/dogs.model";

class DogsRepository {
    async findAllDogs({ pageNumber, pageSize, attribute, order }: { pageNumber: number, pageSize: number, attribute: string, order: string }) {
        
        return DogsInstance.findAll({
            offset: (pageNumber-1) * pageSize,
            limit: pageSize*1,
            order: [[attribute, order]],
        })
    }

    async createDog() {

    }
}

export default new DogsRepository();