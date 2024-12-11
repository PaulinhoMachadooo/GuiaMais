/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/categories/list` | `/categories/list`; params?: Router.UnknownInputParams; } | { pathname: `/categories2/list`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/categories/[id]` | `/categories/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/categories2/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/product/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/categories/list` | `/categories/list`; params?: Router.UnknownOutputParams; } | { pathname: `/categories2/list`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/categories/[id]` | `/categories/[id]`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/categories2/[id]`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/product/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/about${`?${string}` | `#${string}` | ''}` | `/about${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/categories/list${`?${string}` | `#${string}` | ''}` | `/categories/list${`?${string}` | `#${string}` | ''}` | `/categories2/list${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/about` | `/about`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/home` | `/home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/categories/list` | `/categories/list`; params?: Router.UnknownInputParams; } | { pathname: `/categories2/list`; params?: Router.UnknownInputParams; } | `${'/(tabs)'}/categories/${Router.SingleRoutePart<T>}` | `/categories/${Router.SingleRoutePart<T>}` | `/categories2/${Router.SingleRoutePart<T>}` | `/product/${Router.SingleRoutePart<T>}` | { pathname: `${'/(tabs)'}/categories/[id]` | `/categories/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/categories2/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/product/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
