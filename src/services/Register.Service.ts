import axios, { AxiosInstance } from "axios";
import { RegisterProps, WinnerProps } from "./interfaces/RegisterService";

const BASE_URL = 'http://191.252.111.68:8080/api/v1';

const userService: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});

export const createWinner = async (userData: RegisterProps): Promise<WinnerProps> => {
    try {
        const response = await userService.post<WinnerProps>('/cliente', userData);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao enviar o formulário.');
    }
};
