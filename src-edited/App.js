import React from 'react';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { HydraAdmin, hydraClient, fetchHydra as baseFetchHydra } from '@api-platform/admin';
import authProvider from './authProvider';
import { Route, Redirect } from 'react-router-dom';

// @todo dev
// The JWT token is stored in the browser's local storage
console.log('token',localStorage.getItem('token'));
if (localStorage.getItem('token')) {
  localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODc2NjE4NzQsImV4cCI6MTU4NzY2NTQ3NCwicm9sZXMiOlsiUk9MRV9BUElfVVNFUiJdLCJ1c2VybmFtZSI6InRlc3QyIn0.qi8R2HJC0OlYeOullGIUJZS0emVF-PZx0Z_r1hzDUutCcdJYk5BEDtc-MsX9Dz-IeZMis4n2yNA6_T3NPbMw0VzTdDuRWP8OPJhvIlmMGvrC5wY4iz2L-GWiC5K2f-ZDxQhK4M-m7ZYuqp_nE_D4Ch4nKAV7vrfaQrSJ8YZCs6r-mL51TR7IRdHgWW_QXGBwGQWOhZe_phYfhqKATd0wMp_imC6fkRkGThEP69C9u9ABC4_8ekd8sL7KoA6imQn2wjtnNtC6XOX_mi_RD6elgMdLbcOVPNL4Jj6YCTQUWn0T5bAtxO22NyK85p_2ivpuchqYE4AHUL_CqTT0MYP0ISUVqUFmxjrNEfH23cJMeXUdaUZQOukt9TSd3lu_6Rk3J4ecRTsq8jSUeymAJdus-7B5lliiS1vkyPM5iC_k5-kbEMp1Xn6FdhC1r4AoLkSL2RdYpOdLLwnzcoppIizb_DlAYkJ-s5Os-L0rnDb962vyOW4-Qm6nxC-Z6duBaTXMw-tbU5hr9Pw6yRwESf1BwhRYYALbS6To1q1mH2p3E6uuIzR7r4RwbE5i8IrjWtwlDYvqzT2FbrBoFI1wH1NNVzmBj9wkstBlLVQ1Gqj20IVNfoTzFBxtTqBp19RscKeLQ-lQS4-CRhNsWbSpbnzeakCr9_wZIlEf-1qvE3cdMYQ');
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