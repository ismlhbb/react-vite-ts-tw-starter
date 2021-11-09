import Axios, { AxiosInstance } from 'axios';
import { Api, MediaType } from 'constants/api';

/**
 * Code that involves connecting to external API
 * must be put inside a service class. You may also put complex business
 * logics here.
 */

export class ExampleService {
  private static api: AxiosInstance = Axios.create({
    baseURL: Api.BaseURL,
  });

  /**
   * Get list of sample data
   */
  static async getSampleData() {
    const response = await this.api.get(Api.GetPokeList(), {
      params: { limit: '20' },
    });
    return response.data;
  }

  /**
   * Update a sample data
   * @param id Sample data id
   * @param name Sample data name
   * @param age Sample data age
   */
  static async editData(id: string, name: string, age: string) {
    const response = await this.api.put(
      Api.SAMPLE_DATA_BY_ID(id),
      JSON.stringify({ name, age }),
      {
        headers: { 'Content-Type': MediaType.APPLICATION_JSON },
      }
    );

    return response.data;
  }
}
