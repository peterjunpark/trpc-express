import React from 'react';
import { trpc } from '../lib/trpc';

export default function YapList() {
  const response = trpc.yap.getAllYaps.useQuery();

  if (response.isError) {
    return <h2>Error...</h2>;
  }

  if (response.isLoading) {
    return <h2>Loading...</h2>;
  }

  return <pre>{JSON.stringify(response.data, null, 2)}</pre>;
  return <div>YapList</div>;
}
