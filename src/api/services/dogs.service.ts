import dogsRepository from "../repository/dogs.repository";
type Dog = {
    pageNumber?: number,
    pageSize?: number,
    attribute?: string,
    order?: string
};
class DogsService {
    async getAllDogs({ pageNumber = 1, pageSize = 10, attribute = 'name', order = 'asc' }: Dog ) {
        return dogsRepository.findAllDogs({ pageNumber, pageSize, attribute, order });
    }
}

export default new DogsService();