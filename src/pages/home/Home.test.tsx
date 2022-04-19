import { rest } from 'msw';
import { setupServer } from 'msw/node';

let windowSpy: any;
const { REACT_APP_CLIENT_ID } = process.env;
const SCOPES = 'playlist-modify-private';
const REDIRECT_URI = 'http://localhost:3000/';

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
beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
});
afterEach(() => {
  windowSpy.mockRestore();
  server.resetHandlers();
});
afterAll(() => server.close());

test('Auth test', async () => {
  windowSpy.mockImplementation(() => ({
    location: {
      origin: `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`,
    },
  }));

  expect(window.location.origin).toEqual(
    `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`
  );
});

it('should be undefined.', () => {
  windowSpy.mockImplementation(() => undefined);

  expect(window).toBeUndefined();
});

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

// test('It should render search data', () => {
//   render(
//     <Provider store={store}>
//       <Home />
//     </Provider>
//   );
//   const search = screen.findByText('High');
//   expect(search).toBeVisible();
// });
