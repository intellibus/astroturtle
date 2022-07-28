import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Astroturtle Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'astroturtle');
});

export const { run } = test;
