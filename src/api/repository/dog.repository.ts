import { DogsInstance } from "../models/dog.model";
import { Dog } from "../models/interfaces/dog.interface";

class DogsRepository {
    async findAllDogs({ pageNumber, pageSize, attribute, order }: { pageNumber: number, pageSize: number, attribute: string, order: string }) {

        return DogsInstance.findAll({
            offset: (pageNumber - 1) * pageSize,
            limit: pageSize * 1,
            order: [[attribute, order]],
        })
    }

    async findDog(name: string) {
        return DogsInstance.findOne({
            where: { name: name }
        })
    }

    async createDog({ name, color, tail_length, weight }: Dog) {
        return DogsInstance.create({
            name: name,
            color: color,
            tail_length: tail_length,
            weight: weight
        })
    }
}

export default new DogsRepository();