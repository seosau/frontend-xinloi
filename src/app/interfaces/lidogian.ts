import { instance } from "../libs/axios"

export const liDoGian = {
    create: async (liDo: string) => {
        return instance.post('lidogian', {reason: liDo})
    }
}