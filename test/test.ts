import required from '../src/index';

test('should throw error: params required', () => {
  expect(() => {
    required('params required');
  }).toThrow('params required');
});

test('should throw error: username required', () => {
  expect(() => {
    required('username required');
  }).toThrow('username required');
});
