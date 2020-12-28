import { NodePackage } from '../src';
import { synthSnapshot, TestProject } from './util';

test('minimal', () => {
  // GIVEN
  const project = new TestProject();

  // WHEN
  new NodePackage(project, {
    name: 'my-project',
  });

  // THEN
  const pkg = synthSnapshot(project)['package.json'];
  expect(pkg).toStrictEqual({
    'name': 'my-project',
    'version': '0.0.0',
    'license': 'Apache-2.0',
    'main': 'lib/index.js',
    'bundledDependencies': [],
    'dependencies': {},
    'devDependencies': {},
    'peerDependencies': {},
    'scripts': {},
    '//': '~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".',
  });
});