import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://api.spotify.com/v1/search', (req, res, ctx) => {
    res(
      ctx.json({
        tracks: {
          items: [
            {
              album: {
                id: '1',
                name: 'High',
              },
            },
          ],
        },
      })
    );
  })
);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test('should be get data from spotify API', async () => {
  const response = await window.fetch(
    'https://api.spotify.com/v1/search?q=1000x&type=track',
    {
      method: 'GET',
      headers: {
        // !Paste token from console in here
        Authorization: `Bearer BQDKQjgv_QSB4oXmuONrbBGWBkyN3d8UjgsHBTHFNphNWFASkCGMky2UYWvLpB_f4gP3GLvit1qA3pb6tU9YHmDClzBDSkhFIWd2W34Aa8F4iWe6m-1JKElgFMjr_stBKhb968DZDiQ3Yao2mzP52nteyCjSO3Yyx-F3OxBP_Tyad1Inzrcp`,
        'Content-Type': 'application/json',
      },
    }
  );

  expect(response.status).toBe(200);
});
