// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor
} from '../code-to-unit-test/unit-test-me.js';

// isPhoneNumber
test('valid phone number 1', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number 2', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number 1', () => {
  expect(isPhoneNumber('hello')).toBe(false);
});
test('invalid phone number 2', () => {
  expect(isPhoneNumber('123')).toBe(false);
});

// isEmail
test('valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email 2', () => {
  expect(isEmail('user123@domain.net')).toBe(true);
});
test('invalid email 1', () => {
  expect(isEmail('not-an-email')).toBe(false);
});
test('invalid email 2', () => {
  expect(isEmail('email@.com')).toBe(false);
});

// isStrongPassword
test('strong password 1', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});
test('strong password 2', () => {
  expect(isStrongPassword('pass_word1')).toBe(true);
});
test('weak password 1', () => {
  expect(isStrongPassword('1short')).toBe(false);
});
test('weak password 2', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// isDate
test('valid date 1', () => {
  expect(isDate('12/31/2023')).toBe(true);
});
test('valid date 2', () => {
  expect(isDate('01/01/2000')).toBe(true);
});
test('invalid date 1', () => {
  expect(isDate('2023-12-31')).toBe(false);
});
test('invalid date 2', () => {
  expect(isDate('not-a-date')).toBe(false);
});

// isHexColor
test('valid hex color 1', () => {
  expect(isHexColor('#FFAABB')).toBe(true);
});
test('valid hex color 2', () => {
  expect(isHexColor('#abc')).toBe(true);
});
test('invalid hex color 1', () => {
  expect(isHexColor('ZZZ999')).toBe(false);
});
test('invalid hex color 2', () => {
  expect(isHexColor('xyz')).toBe(false);
});
