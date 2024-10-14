import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';
import Giscus from '@giscus/react';

export default function DocItemFooter(): JSX.Element | null {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <>
      {process.env.NODE_ENV != 'development' &&
        <Giscus
          loading='async'
          crossorigin='true'
          repo='shellhub-io/shellhub'
          repoId='MDEwOlJlcG9zaXRvcnkxODcwNzg2MzE='
          category='General'
          categoryId='MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMDA1MjEy'
          mapping='title'
          strict='0'
          reactionsEnabled='1'
          emitMetadata='0'
          inputPosition='top'
          theme='dark_dimmed'
          lang='en' />
      }  
      <footer
        className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
        {canDisplayTagsRow && (
          <div
            className={clsx(
              'row margin-top--sm',
              ThemeClassNames.docs.docFooterTagsRow,
            )}>
            <div className="col">
              <TagsListInline tags={tags} />
            </div>
          </div>
        )}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            className={clsx(
              'margin-top--sm',
              ThemeClassNames.docs.docFooterEditMetaRow,
            )}
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </footer>
    </>
  );
}

