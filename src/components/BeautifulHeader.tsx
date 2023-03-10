import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export function BeautifulHeader() {
  const { query, push, pathname, basePath } = useRouter();

  return (
    <div>
      <h1>Todo ID: {query.id}</h1>

      <Link
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        href={`/contacts/?id=${query.id}&from=${pathname}`}
      >
        Contacts Page
      </Link>

      <button
        onClick={async () => {
          // lot's of actions here...
          // then navigate!
          await push(
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `/contacts?id=${query.id}&from=${pathname}&something=${basePath}`
          );
        }}
      >
        Some Action
      </button>
    </div>
  );
}
