import fluffy from './index';
import { required } from './index';

test('should throw error: params required', () => {
  expect(() => {
    fluffy.required('params required');
  }).toThrow('params required');
});

test('should throw error: username required', () => {
  expect(() => {
    required('username required');
  }).toThrow('username required');
});
