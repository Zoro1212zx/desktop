import React from 'react';
import { $t } from 'services/i18n';
import Translate from 'components-react/shared/Translate';
import PlatformButton from 'components-react/shared/PlatformButton';
import { shell } from 'electron';
import styles from './Signup.m.less';

const openSLIDSignup = () => shell.openExternal('https://streamlabs.com/signup?electron=1');

export default function Signup({ onSignupLinkClick }: { onSignupLinkClick: () => void }) {
  return (
    <>
      <p className={styles.signupSubtitle}>
        {$t(
          'Create an account to unlock the most useful features like Streaming, Themes, Highlighter, App Store, Collab Cam and more!',
        )}
      </p>

      <PlatformButton platform="streamlabs" onClick={openSLIDSignup}>
        <Translate message={$t('Create a <span>Streamlabs ID</span>')}>
          <span slot="span" style={{ fontWeight: 'bold' }} />
        </Translate>
      </PlatformButton>

      <span className={styles.signupTextContainer}>
        <Translate message={$t('Already have an account? <span>Login</span>')}>
          <a slot="span" style={{ textDecoration: 'underline' }} onClick={onSignupLinkClick} />
        </Translate>
      </span>
    </>
  );
}
