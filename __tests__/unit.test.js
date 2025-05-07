// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number: 12345', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});

test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('valid email: hello@example.com', () => {
  expect(isEmail('hello@example.com')).toBe(true);
});

test('valid email: username@ucsd.edu', () => {
  expect(isEmail('username@ucsd.edu')).toBe(true);
});

test('invalid email: justtext', () => {
  expect(isEmail('justtext')).toBe(false);
});

test('invalid email: name@.com', () => {
  expect(isEmail('name@.com')).toBe(false);
});

// isStrongPassword
test('valid password: abc123', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('valid password: A1b2C3', () => {
  expect(isStrongPassword('A1b2C3')).toBe(true);
});

test('invalid password: 123', () => {
  expect(isStrongPassword('123')).toBe(false);
});

test('invalid password: toooooooooooooooooooolong', () => {
  expect(isStrongPassword('tooooooooooooooooooolong')).toBe(false);
});

// isDate
test('valid date: 01/01/2020', () => {
  expect(isDate('01/01/2020')).toBe(true);
});

test('valid date: 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('invalid date: 2020/13/01', () => {
  expect(isDate('2020/13/01')).toBe(false);
});

test('invalid date: 99-99-9999', () => {
  expect(isDate('99-99-9999')).toBe(false);
});

// isHexColor
test('valid hex color: #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('valid hex color: #a1b2c3', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
});

test('invalid hex color: #xyzxyz', () => {
  expect(isHexColor('#xyzxyz')).toBe(false);
});

test('invalid hex color: #12345', () => {
  expect(isHexColor('#12345')).toBe(false);
});
