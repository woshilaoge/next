import * as React from 'react';
import Dropdown from '../index';
import '../style';
import { test, createContainer, testReact } from '../../util/__tests__/a11y/validate';

const portalContainerId = 'a11y-portal-id';
let portalContainer: HTMLElement;

describe('Dropdown A11y', () => {
    it('should not have any violations', async () => {
        portalContainer = createContainer(portalContainerId);
        await testReact(
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Dropdown trigger={<a>Hello dropdown</a>} visible container={portalContainer}>
                <div>dropdown</div>
            </Dropdown>
        );
        return test(portalContainer);
    });
});
