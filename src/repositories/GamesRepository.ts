import api from '../api';

interface GameRequest {
  name: string;
  page: number;
}

class GamesRepository {
  public async list({ name, page }: GameRequest) {
    function pageSize(): string | number {
      if (page > 1) {
        return `10; offset ${page * 10 - 10}`;
      }
      return page * 10;
    }

    return await api
      .post(
        '/multiquery',
        `
      query games "List of ${name} games  " {
        fields
        name,
        summary,
        themes.name,
        popularity,
        rating_count,
        platforms.name,
        involved_companies.company.name,
        cover.url, cover.height, cover.width;
        sort rating_count desc;
        where rating_count != n & name = *"${name}"*;
        limit ${pageSize()};
      };
      `
      )
      .then((values) => values.data)
      .catch((error) => error.response.data);
  }
}

export default GamesRepository;
