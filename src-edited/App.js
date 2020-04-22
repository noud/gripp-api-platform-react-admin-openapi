import React from 'react';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { HydraAdmin, hydraClient, fetchHydra as baseFetchHydra } from '@api-platform/admin';
import authProvider from './authProvider';
import { Route, Redirect } from 'react-router-dom';

// @todo dev
// The JWT token is stored in the browser's local storage
console.log('token',localStorage.getItem('token'));
if (localStorage.getItem('token')) {
  localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODc1OTAwMjIsImV4cCI6MTU4NzU5MzYyMiwicm9sZXMiOlsiUk9MRV9BUElfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3QyIn0.BIm96Fqo6DxA1WStolBmC5uXiieVnj0Y2_DXZOQ3vKceeF2NAiDpUoowLbshPhgE9N8sRWmGCiuWLXFGY-3UwoeBVt_JEB99LKuRpxLKWbGRyM7-nIiJXuUKzMz8-tyCMro_4v14MbixnOmlgNvg6Uck1cgW7SWrWDvlphlxHvtzPcYf4rbfOwhlZd2BErpxU56Xgx7BYNffa4JW6w2XGiEqdZTX7VZ4LbkMPu0g8nOPy-MBXuaPAve8qlb8Kf0fP8KdpqrOyHm7UtOcbXjnVUV65Dy4pTH1D_ZzFfHufjq0Jto2UXg-kqrimgSjPdheRDjvU3v4QU7Foq-WSWkoLlrwrlyhzBFSOVrsyZ2db_pl391xsFvke9Yd_03Y9wLkaIVeaKk2dttFdNYoW3YDaMMtT3OQinF13wIJgBzGFbvQhRH_2CRWgeQUf1GgyeRLf_WsIu_K5PM65txsZD67bx1IwfFJklUnGiBusO4S3THQeufSAS44LootfRQ0pDqU3yq5lF-tM3hxn9PNyLH9PbvwyQR8HfAxVig661iFvFcw7mmL0j8HTQimcVR-vb5jt-oi3q3pcDtfkeM1RoGZCB4pmiKNyQqyiC7jib5kLSl-Rv4bGGRRkcOxcJGIZ10KeaK0HRuM1qDnI-KzjAU5MPBy6vkpD2ixyprcWqxWWBc');
}

const entrypoint = "http://gripp.localhost/api";
const fetchHeaders = {'Authorization': `Bearer ${localStorage.getItem('token')}`};
const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
	...options,
	headers: new Headers(fetchHeaders),
});
const dataProvider = api => hydraClient(api, fetchHydra);
const apiDocumentationParser = entrypoint =>
  parseHydraDocumentation(entrypoint, {
    headers: new Headers(fetchHeaders),
  }).then(
    ({ api }) => ({ api }),
    result => {
      const { api, status } = result;

      if (status === 401) {
        return Promise.resolve({
          api,
          status,
          customRoutes: [
            <Route path="/" render={() => <Redirect to="/login" />} />,
          ],
        });
      }

      return Promise.reject(result);
    }
  );

export default () => (
    <HydraAdmin
        apiDocumentationParser={apiDocumentationParser}
        authProvider={authProvider}
        entrypoint={entrypoint}
        dataProvider={dataProvider}
    />
);