/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as StatsRouteImport } from './routes/stats'
import { Route as IndexRouteImport } from './routes/index'

const StatsRoute = StatsRouteImport.update({
  id: '/stats',
  path: '/stats',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/stats': typeof StatsRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/stats': typeof StatsRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/stats': typeof StatsRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/stats'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/stats'
  id: '__root__' | '/' | '/stats'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  StatsRoute: typeof StatsRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/stats': {
      id: '/stats'
      path: '/stats'
      fullPath: '/stats'
      preLoaderRoute: typeof StatsRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  StatsRoute: StatsRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
