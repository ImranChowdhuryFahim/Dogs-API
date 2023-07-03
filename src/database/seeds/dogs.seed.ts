import { DogsInstance } from '../../api/models/dog.model';

const dogsData = [
    {
        name: "Neo",
        color: "red&amber",
        tail_length: 22,
        weight: 32
    },
    {
        name: "Jessy",
        color: "black&white",
        tail_length: 7,
        weight: 14
    }
];

export const seedDogs = () => DogsInstance.bulkCreate(dogsData, { individualHooks: true });
