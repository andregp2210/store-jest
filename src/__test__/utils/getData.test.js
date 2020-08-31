import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Call API and get data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('asd.com').then((response) => {
      expect(response.data).toEqual('12345');
    });
    expect(fetch.mock.calls[0][0]).toEqual('asd.com');
  });
});
