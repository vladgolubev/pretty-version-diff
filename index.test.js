const prettyVersionDiff = require('.');

it('should export a prettyVersionDiff function', () => {
  expect(prettyVersionDiff).toBeInstanceOf(Function);
});

it('should return incremented patch version', () => {
  const versionDiff = prettyVersionDiff('1.0.1', 'patch');
  expect(versionDiff).toEqual('1.0.2');
});

it('should return incremented minor version', () => {
  const versionDiff = prettyVersionDiff('1.0.1', 'minor');
  expect(versionDiff).toEqual('1.1.0');
});

it('should return incremented major version', () => {
  const versionDiff = prettyVersionDiff('1.0.1', 'major');
  expect(versionDiff).toEqual('2.0.0');
});

it('should return incremented prerelease version', () => {
  const versionDiff = prettyVersionDiff('1.0.1', 'prerelease');
  expect(versionDiff).toEqual('1.0.2-0');
});
